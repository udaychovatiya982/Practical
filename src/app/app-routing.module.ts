import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMusicComponent } from './add-music/add-music.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'addmusic',
    component: AddMusicComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
