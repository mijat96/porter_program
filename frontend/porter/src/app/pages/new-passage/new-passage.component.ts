import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Passage } from 'src/app/models/passage-model';
import { PassageService } from 'src/app/services/passage.service';

@Component({
  selector: 'app-new-passage',
  templateUrl: './new-passage.component.html',
  styleUrls: ['./new-passage.component.scss']
})
export class NewPassageComponent implements OnInit {
  passageForm: FormGroup;

  constructor(private router: Router,
              private passageService: PassageService,
              private fb: FormBuilder) {
    this.passageForm = this.fb.group({
      shift: new FormControl(),
      plateNumber: new FormControl(),
      inTime: new FormControl(),
      outTime: new FormControl(),
      typeInMaterial: new FormControl(),
      typeOutMaterial: new FormControl(),
      remark: new FormControl(),
      ban: new FormControl(),
      driverName: new FormControl(),
      driverSurname: new FormControl(),
      serialNumber: new FormControl(),
      idCardOrPassportNumber: new FormControl(),
      workers: new FormControl(),
      vehicles: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSave(){
    let newPassage = this.setNewPassage();
    console.log(newPassage);
    this.passageService.create(newPassage)
                        .toPromise()
                        .then(x => {this.router.navigate(['/home']);})
                        .catch(x => {console.log("Add message box: " + x)});
  }
  
  setNewPassage() {
    let newPassage = {
      shift: this.passageForm.controls['shift'].value,
      plateNumber: this.passageForm.controls['plateNumber'].value,
      inTime: this.passageForm.controls['inTime'].value,
      outTime: this.passageForm.controls['outTime'].value,
      typeInMaterial: this.passageForm.controls['typeInMaterial'].value,
      typeOutMaterial: this.passageForm.controls['typeOutMaterial'].value,
      remark: this.passageForm.controls['remark'].value,
      ban: this.passageForm.controls['ban'].value,
      driverName: this.passageForm.controls['driverName'].value,
      driverSurname: this.passageForm.controls['driverSurname'].value,
      serialNumber: this.passageForm.controls['serialNumber'].value,
      idCardOrPassportNumber: this.passageForm.controls['idCardOrPassportNumber'].value,
      workers: this.passageForm.controls['workers'].value,
      vehicles: this.passageForm.controls['vehicles'].value,
    } as Passage;

    return newPassage;
  }
}


