import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from './pages/address-book/address-book.component';
import { BanPassageComponent } from './pages/ban-passage/ban-passage.component';
import { FinishPassageComponent } from './pages/finish-passage/finish-passage.component';
import { HomeComponent } from './pages/home/home.component';
import { ListPassagesComponent } from './pages/list-passages/list-passages.component';
import { LoginComponent } from './pages/login/login.component';
import { NewPassageComponent } from './pages/new-passage/new-passage.component';
import { NewShiftReportComponent } from './pages/new-shift-report/new-shift-report.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
  ,{
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
    component: FinishPassageComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'list-passages',
    component: ListPassagesComponent
  },
  {
    path: 'new-shift-report',
    component: NewShiftReportComponent
  },
  {
    path: 'address-book',
    component: AddressBookComponent
  },
  {
    path: 'ban-passage',
    component: BanPassageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
