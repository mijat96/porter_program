import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-passage',
  templateUrl: './finish-passage.component.html',
  styleUrls: ['./finish-passage.component.scss']
})
export class FinishPassageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
   
  onFinish(){
    this.router.navigate(['/home']);
  }

}
