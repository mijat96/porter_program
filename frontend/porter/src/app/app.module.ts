import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewPassageComponent } from './pages/new-passage/new-passage.component';
import { FinishPassageComponent } from './pages/finish-passage/finish-passage.component';
import { ListPassagesComponent } from './pages/list-passages/list-passages.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { PassageService } from './services/passage.service';
import { NewShiftReportComponent } from './pages/new-shift-report/new-shift-report.component';
import { ShiftReportService } from './services/shift.report.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NewPassageComponent,
    FinishPassageComponent,
    ListPassagesComponent,
    NewShiftReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, 
              PassageService, 
              ShiftReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
