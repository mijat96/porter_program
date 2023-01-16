import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Passage } from 'src/app/models/passage-model';
import { PassageService } from 'src/app/services/passage.service';

@Component({
  selector: 'app-ban-passage',
  templateUrl: './ban-passage.component.html',
  styleUrls: ['./ban-passage.component.scss']
})
export class BanPassageComponent implements OnInit {
  passageForm: FormGroup;
  passageForEdit: Passage = {} as Passage;

  constructor(private router: Router,
              private passageService: PassageService,
              private fb: FormBuilder,
              private activeRoute: ActivatedRoute) {
    this.passageForm = this.fb.group({
      id: new FormControl(),
      shift: new FormControl(),
      plateNumber: new FormControl(),
      inTime: new FormControl(),
      outTime: new FormControl(),
      typeInMaterial: new FormControl(),
      typeOutMaterial: new FormControl(),
      remark: new FormControl(),
      ban: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.passageForEdit = params as Passage;
      console.log(params)
  });
  }
   
  onFinish(){
    let editPassage = this.setPassage();
    this.passageService.finish(editPassage)
                        .toPromise()
                        .then(x => {this.router.navigate(['/home']);})
                        .catch(x => {console.log("Add message box: " + x)});
  }

  setPassage() {
    let newPassage = {
      _id: this.passageForEdit._id,
      shift: this.passageForm.controls['shift'].value,
      plateNumber: this.passageForEdit.plateNumber,
      inTime: this.passageForEdit.inTime,
      outTime: this.passageForm.controls['outTime'].value,
      typeInMaterial: this.passageForEdit.typeInMaterial,
      typeOutMaterial: this.passageForm.controls['typeOutMaterial'].value,
      remark: this.passageForm.controls['remark'].value,
      ban: this.passageForm.controls['ban'].value,
      driverName: this.passageForEdit.driverName,
      driverSurname: this.passageForEdit.driverSurname,
      serialNumber: this.passageForEdit.serialNumber,
      idCardOrPassportNumber: this.passageForEdit.idCardOrPassportNumber,
      workers: this.passageForEdit.workers,
      vehicles: this.passageForEdit.vehicles,
    } as Passage;

    return newPassage;
  }

}
