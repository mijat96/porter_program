import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passage } from 'src/app/models/passage-model';
import { listOfPassages } from './passages-dummy';

@Component({
  selector: 'app-list-passages',
  templateUrl: './list-passages.component.html',
  styleUrls: ['./list-passages.component.scss']
})
export class ListPassagesComponent implements OnInit {
  listOfPassages: Passage[] = listOfPassages;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  passageDetails(passage: Passage){
    console.log(passage);
  }

  route(componentName: string){
    this.router.navigate(['/' + componentName]);
  }
}