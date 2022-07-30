export interface Describe {
  namejob: string;
  describeDetail: string;
}

export interface WorkExpreience {
  nameCompany: string;
  workarea: string;
  timework: string;
  describe: Describe;
}

export interface School {
  Schoolname: string;
  studyingarea: string;
  timelearn: string;
}

export interface Subject {
  name: string;
  subjectDetail: string;
}

export interface Education {
  school: School;
  subject: Subject;
}

export interface Location {
  email: string;
  location: string;
  phone: string;
}

export interface Info {
  age: number;
  workExpreience: WorkExpreience[];
  education: Education[];
  location: Location;
}

export interface Profile {
  fullname: string;
  info: Info;
  message: string;
  sayHi: string;
}

export interface ISsentItemDetail {
  profile: Profile[];
}
