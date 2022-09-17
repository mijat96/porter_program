import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishPassageComponent } from './pages/finish-passage/finish-passage.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewPassageComponent } from './pages/new-passage/new-passage.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'new-passage',
    component: NewPassageComponent
  },
  {
    path: 'finish-passage',
    component: FinishPassageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
