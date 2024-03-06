import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { EmployeeInfo, EMPLOYEE_FIELD_NAMES } from "./types";
import {
  EmployeeFormWrapper,
  EmployeeFormContainer,
  EmployeeCard,
  EmployeeInfoContainer,
  EmployeeInfoText,
  EmployeeTitle,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  ErrorContainer,
} from "./styles";

function EmployeeForm() {
  const schema = Yup.object().shape({
    [EMPLOYEE_FIELD_NAMES.FIRST_NAME]: Yup.string()
      .required("Поле Имя обязательное")
      .min(2, "Минимальное колличество символов 2")
      .max(50, "Максимальное колличество символов 50"),
    [EMPLOYEE_FIELD_NAMES.LAST_NAME]: Yup.string()
      .required("Поле Фамилия обязательное")
      .max(15, "Максимальное колличество символов 15"),
    [EMPLOYEE_FIELD_NAMES.AGE]: Yup.string()
      .required("Поле Возраст обязательное")
      .min(1, "Минимальное колличество символов 1")
      .max(3, "Максимальное колличество символов 3"),
    [EMPLOYEE_FIELD_NAMES.JOB_POSITION]: Yup.string().max(
      30,
      "Максимальное колличество символов 30"
    ),
    [EMPLOYEE_FIELD_NAMES.AGREEMENT]: Yup.boolean().oneOf(
      [true],
      "Это поле обязательное для выбора"
    ),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FIELD_NAMES.FIRST_NAME]: "",
      [EMPLOYEE_FIELD_NAMES.LAST_NAME]: "",
      [EMPLOYEE_FIELD_NAMES.AGE]: "",
      [EMPLOYEE_FIELD_NAMES.JOB_POSITION]: "",
      [EMPLOYEE_FIELD_NAMES.AGREEMENT]: false,
    },
    validationSchema: schema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values) => {
      setUserInfo({
        name: values.firstName,
        lastName: values.lastName,
        ageValue: values.age,
        jobPosition: values.jobPosition,
      });
      setIsShowCard(true);
    },
  });

  console.log(formik);

  const { firstName, lastName, age, jobPosition, agreement } = formik.values;

  // Создадим state, который решает когда нам карточку показывать, а когда нет
  const [isShowCard, setIsShowCard] = useState<boolean>(false);
  // Создаем контейнер(стейт), в котором будет храниться информация для карточки,
  // чтобы она туда добавлялась только на onClick
  const [userInfo, setUserInfo] = useState<EmployeeInfo>({
    name: "",
    lastName: "",
    ageValue: "",
    jobPosition: "",
  });

  return (
    <EmployeeFormWrapper>
      <EmployeeFormContainer onSubmit={formik.handleSubmit}>
        <Input
          id="first_name_id"
          name={EMPLOYEE_FIELD_NAMES.FIRST_NAME}
          onChange={formik.handleChange}
          value={firstName}
          label="Имя*"
          placeholder="Иван"
          error={formik.errors[EMPLOYEE_FIELD_NAMES.FIRST_NAME]}
        />
        <Input
          id="last_name_id"
          name={EMPLOYEE_FIELD_NAMES.LAST_NAME}
          onChange={formik.handleChange}
          value={lastName}
          label="Фамилия*"
          placeholder="Василевский"
          error={formik.errors[EMPLOYEE_FIELD_NAMES.LAST_NAME]}
        />
        <Input
          id="age_id"
          name={EMPLOYEE_FIELD_NAMES.AGE}
          onChange={formik.handleChange}
          value={age}
          label="Возраст*"
          placeholder="25"
          error={formik.errors[EMPLOYEE_FIELD_NAMES.AGE]}
        />
        <Input
          id="job_position_id"
          name={EMPLOYEE_FIELD_NAMES.JOB_POSITION}
          onChange={formik.handleChange}
          value={jobPosition}
          label="Должность"
          placeholder="Старший специалист"
          error={formik.errors[EMPLOYEE_FIELD_NAMES.JOB_POSITION]}
        />
        <CheckboxContainer>
          <Checkbox
            id="agreement_id"
            name={EMPLOYEE_FIELD_NAMES.AGREEMENT}
            checked={agreement}
            onChange={formik.handleChange}
          />
          <CheckboxLabel htmlFor="agreement_id">
            Я согласен с политикой обработкой данных*
          </CheckboxLabel>
        </CheckboxContainer>
        {formik.errors[EMPLOYEE_FIELD_NAMES.AGREEMENT] && (
          <ErrorContainer>
            {formik.errors[EMPLOYEE_FIELD_NAMES.AGREEMENT]}
          </ErrorContainer>
        )}
        <Button name="Создать" type="submit" />
      </EmployeeFormContainer>
      {/* Если в левой части от && у вас false, то правая часть(JSX элементы) не показываются, 
      если же левая часть от && true, то правая часть(JSX элементы) отображается */}
      {isShowCard && (
        <EmployeeCard>
          <EmployeeInfoContainer>
            <EmployeeTitle>Имя</EmployeeTitle>
            <EmployeeInfoText>{userInfo.name}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Фамилия</EmployeeTitle>
            <EmployeeInfoText>{userInfo.lastName}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Возраст</EmployeeTitle>
            <EmployeeInfoText>{userInfo.ageValue}</EmployeeInfoText>
          </EmployeeInfoContainer>
          {!!userInfo.jobPosition && (
            <EmployeeInfoContainer>
              <EmployeeTitle>Должность</EmployeeTitle>
              <EmployeeInfoText>{userInfo.jobPosition}</EmployeeInfoText>
            </EmployeeInfoContainer>
          )}
        </EmployeeCard>
      )}
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
