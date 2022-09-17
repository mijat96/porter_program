import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-passages',
  templateUrl: './list-passages.component.html',
  styleUrls: ['./list-passages.component.scss']
})
export class ListPassagesComponent implements OnInit {
  listOfPassages: Passge[] = 
  [
    {
      id: 1, 
      shift: "prva", 
      plateNumber: 'ŠA015BB', 
      inTime: new Date(), 
      outTime: new Date(), 
      typeInMaterial: "metal", 
      remark: "nema", 
      driverName: "Petar",
      driverSurname: "Petrovic"
    } as Passge,
    {
      id: 2, 
      shift: "druga", 
      plateNumber: 'ŠA016BB', 
      inTime: new Date(), 
      outTime: new Date(), 
      typeInMaterial: "metal", 
      remark: "nema", 
      driverName: "Stefan",
      driverSurname: "Petrovic"
    } as Passge,
    {
      id: 3, 
      shift: "prva", 
      plateNumber: 'ŠA015BB', 
      inTime: new Date(), 
      outTime: new Date(), 
      typeInMaterial: "metal", 
      remark: "nema", 
      driverName: "Igor",
      driverSurname: "Petrovic"
    } as Passge,
    {
      id: 4, 
      shift: "prva", 
      plateNumber: 'ŠA015BB', 
      inTime: new Date(), 
      outTime: new Date(), 
      typeInMaterial: "metal", 
      remark: "nema", 
      driverName: "Milos",
      driverSurname: "Petrovic"
    } as Passge,
    {
      id: 5, 
      shift: "prva", 
      plateNumber: 'ŠA015BB', 
      inTime: new Date(), 
      outTime: new Date(), 
      typeInMaterial: "metal", 
      remark: "nema", 
      driverName: "Ivan",
      driverSurname: "Petrovic"
    } as Passge,
  ];

  constructor() { }

  ngOnInit(): void {
  }

  back(){}

}

interface Passge{
  id: number;
  shift: string;
  plateNumber: string;
  inTime: Date;
  outTime: Date;
  typeInMaterial: string;
  typeOutMaterial: string;
  remark: string;
  ban: string;
  driverName: string;
  driverSurname: string;
}