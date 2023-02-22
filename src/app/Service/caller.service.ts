import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallerService {

  public host: string = "localhost:8080/api/"
  constructor(private http: HttpClient) {

  }
  public login(obj: any) {
    return this.http.post(this.host + "login", obj)
  }
  public AddSong(obj: FormData) {
    return this.http.post(this.host + "uploadFile", obj)
  }
  public GetAllSong() {
    return this.http.get(this.host + "getAllFiles")
  }
  public deleteSong(id: number) {
    return this.http.post(this.host + "deleteFile", id)
  }
}
