import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passage } from 'src/app/models/passage-model';
import { PassageService } from 'src/app/services/passage.service';
import { listOfPassages } from './passages-dummy';

@Component({
  selector: 'app-list-passages',
  templateUrl: './list-passages.component.html',
  styleUrls: ['./list-passages.component.scss']
})
export class ListPassagesComponent implements OnInit {
  listOfPassages: Passage[] = [];

  constructor(private router: Router,
              private passageService: PassageService) { }

  ngOnInit(): void {
    this.passageService.getList().toPromise().then(x => this.listOfPassages = x || [] as Passage[]);
  }

  passageDetails(passage: Passage){
    console.log(passage);
  }

  route(componentName: string){
    this.router.navigate(['/' + componentName]);
  }
}