import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-passage',
  templateUrl: './new-passage.component.html',
  styleUrls: ['./new-passage.component.scss']
})
export class NewPassageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSave(){
    this.router.navigate(['/home']);
  }
}
