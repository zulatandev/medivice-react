export interface IDoctor {
  id: number;
  email: string;
  fullname: string;
  phone: string;
  gender: string;
  clinic: string;
  photo: string;
}

export interface IDoctorContext {
  doctors: IDoctor[];
  loading: boolean;
}
