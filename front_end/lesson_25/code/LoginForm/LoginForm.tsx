import { useState, ChangeEvent } from "react";
// step 1: импортируем useFormik
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormValues } from "./types";
import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles";

function LoginForm() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Does not match with email format")
      .min(7, "Minimum number of symbpols is 7"),
      password: Yup.string().strict().required("Password should be required")
      .min(3,"The minimum length of the password should be 3")
      .max(20, "The maximum length of the password should be 20")
      .uppercase("The password should be in uppercase")
  });

  // step 2: создаем объект formik, который будет контролировать нашу форму LoginForm
  // useFormik - принимает в качестве обязательного аргумента объект с необходимыми парраметрами
  const formik = useFormik({
    initialValues: {
      // ключем у initialValues должен быть name наших инпутов,
      // а значение - дефолтовое значение которое будет при монтировании компонента
      email: "",
      password: "",
    } as LoginFormValues,
    validationSchema: schema,
    // Функция, которая собирает данные с формы и мы возможность что-то с ними сделать(например: отправить их на сервер)
    onSubmit: (values: LoginFormValues, helpers) => {
      console.log("submit works");
      console.log(values);
      console.log(helpers);

      // Пример того как можно отправить данные на сервер в onSubmit
      // const response = await fetch("url", {
      //   method: "POST",
      //   body: JSON.stringify(values),
      // });
    },
  });

  console.log(formik);

  // console.log(formik.values.email);
  // console.log(formik.values.password)

  // Контороль элементов форм с помощью useState
  // const [emailValue, setEmailValue] = useState<string>("");
  // const [passwordValue, setPasswordValue] = useState<string>("");

  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPasswordValue(event.target.value);
  // };

  // const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmailValue(event.target.value);
  // };

  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login form</LoginFormTitle>
      <InputsContainer>
        <Input
          id="login-email"
          placeholder="Enter your email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Input
          value={formik.values.password}
          onChange={formik.handleChange}
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
