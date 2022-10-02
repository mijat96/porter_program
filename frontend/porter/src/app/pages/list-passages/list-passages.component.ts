import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passge } from 'src/app/models/passage-model';
import { listOfPassages } from './passages-dummy';

@Component({
  selector: 'app-list-passages',
  templateUrl: './list-passages.component.html',
  styleUrls: ['./list-passages.component.scss']
})
export class ListPassagesComponent implements OnInit {
  listOfPassages: Passge[] = listOfPassages;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  passageDetails(passage: Passge){
    console.log(passage);
  }

  route(componentName: string){
    this.router.navigate(['/' + componentName]);
  }
}