export interface EmployeeInfo {
  name: string;
  lastName: string;
  ageValue: string;
  jobPosition: string;
}

export enum EMPLOYEE_FIELD_NAMES {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  AGE = "age",
  JOB_POSITION = "jobPosition",
  AGREEMENT = "agreement",
}
