export interface Passage{
    _id: number;
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
    serialNumber: number;
    idCardOrPassportNumber: number;
    vehicles: string;
    workers: string;
  }