import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CallerService } from '../Service/caller.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {

  @ViewChild("addSong") public addSongForm: NgForm | undefined;
  public ImageFile: any
  public SongFile: any
  constructor(
    private caller: CallerService,
    private router: Router) { }

  async ngOnInit() {
    await this.getPlayList()
  }
  public onUploadImage(files: any) {
    this.ImageFile = files

  }
  public onUploadSong(files: any) {
    this.SongFile = files
  }
  public async onAddSong(AddSong: NgForm) {
    const formData = new FormData;
    let SName = AddSong.form.value.songName
    let Disc = AddSong.form.value.discription
    formData.append('imageFile', this.ImageFile[0]);
    formData.append('songFile', this.SongFile[0]);
    formData.append('name', SName);
    formData.append('description', Disc);
    console.log(formData);

    this.caller.AddSong(formData).subscribe(async (res: any) => {
      debugger
      console.log(res);
    })
    // this.addSongForm?.reset()
  }
  public PlayList = [{ songName: "Temp", _id: "13545", discription: "Temp", imgSrc: "../../assets/images.jpeg", songSrc: "../../assets/Raatan Lambiyan_64(PagalWorld.com.se).mp3" }]
  public async getPlayList() {
    this.caller.GetAllSong().subscribe(async (res: any) => {
      console.log(res);
      if (res) {

      }
    })
  }
  public audio = new Audio()

  public onPlaySound(src: string) {
    this.audio.src = src
    this.audio.load()
    this.audio.play()
  }
  public onPauseSound(src: string) {
    this.audio.src = src
    this.audio.load()
    this.audio.pause()
  }
  public onDeleteSong(id: any) {
    this.caller.deleteSong(id).subscribe(async (res: any) => {
      if (res) {

      }
    })
  }
}
