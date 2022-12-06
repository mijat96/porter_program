import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShiftRepor } from 'src/app/models/shift-report-model';
import { PassageService } from 'src/app/services/passage.service';
import { ShiftReportService } from 'src/app/services/shift.report.service';

@Component({
  selector: 'app-new-shift-report',
  templateUrl: './new-shift-report.component.html',
  styleUrls: ['./new-shift-report.component.scss']
})
export class NewShiftReportComponent implements OnInit {
  passageForm: FormGroup;
  
  constructor(private router: Router,
              private shiftReporService: ShiftReportService,
              private fb: FormBuilder) { 
                this.passageForm = this.fb.group({
                  tookOverShift: new FormControl(),
                  time: new FormControl(),
                  tookOverShiftCorrectCondition: new FormControl(),
                  events: new FormControl(),
                  visitController: new FormControl(),
                  shift: new FormControl(),
                  daytimePatrol: new FormControl(),
                  nighttimePatrol: new FormControl(),
                  notes: new FormControl(),
                  extraordinaryEvent: new FormControl(),
                })
              }

  ngOnInit(): void {
  }

  onSave(){
    let newShiftRepor = this.setNewShiftRepor();
    console.log(newShiftRepor);
    this.shiftReporService.create(newShiftRepor)
                        .toPromise()
                        .then(x => {this.router.navigate(['/home']);})
                        .catch(x => {console.log("Add message box: " + x)});
  }
  
  setNewShiftRepor() {
    let newShiftRepor = {
      tookOverShift: this.passageForm.controls['tookOverShift'].value,
      time: this.passageForm.controls['time'].value.toString(),
      tookOverShiftCorrectCondition: this.passageForm.controls['tookOverShiftCorrectCondition'].value,
      events: this.passageForm.controls['events'].value,
      visitController: this.passageForm.controls['visitController'].value,
      shift: this.passageForm.controls['shift'].value,
      daytimePatrol: this.passageForm.controls['daytimePatrol'].value,
      nighttimePatrol: this.passageForm.controls['nighttimePatrol'].value,
      notes: this.passageForm.controls['notes'].value,
      extraordinaryEvent: this.passageForm.controls['extraordinaryEvent'].value,
    } as ShiftRepor;

    return newShiftRepor;
  }

}
