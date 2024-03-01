import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { EmployeeInfo } from "./types";
import {
  EmployeeFormWrapper,
  EmployeeFormContainer,
  EmployeeCard,
  EmployeeInfoContainer,
  EmployeeInfoText,
  EmployeeTitle,
} from "./styles";

function EmployeeForm() {
  const [nameValue, setNameValue] = useState<string>("");
  const [lastNameValue, setLastNameValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");
  const [jobPositionValue, setJobPositionValue] = useState<string>("");
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

  const onChangeFieldsValue = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: Dispatch<SetStateAction<string>>
  ) => {
    setFieldValue(event.target.value);
  };

  const createEmployeeCard = () => {
    // Если все значения у нас не пустые, то показываем карточку
    if (!!nameValue && !!lastNameValue && !!ageValue && !!jobPositionValue) {
      setUserInfo({
        name: nameValue,
        lastName: lastNameValue,
        ageValue: ageValue,
        jobPosition: jobPositionValue,
      });
      setIsShowCard(true);
    } else {
      // Показываем alert если хотя бы одно из полей пустое
      setIsShowCard(false);
      setTimeout(() => alert("Введите данные во все поля"), 0);
    }
  };

  return (
    <EmployeeFormWrapper>
      <EmployeeFormContainer>
        <Input
          id="first_name_id"
          name="firstName"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setNameValue)
          }
          value={nameValue}
          label="Имя"
          placeholder="Иван"
        />
        <Input
          id="last_name_id"
          name="lastName"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setLastNameValue)
          }
          value={lastNameValue}
          label="Фамилия"
          placeholder="Василевский"
        />
        <Input
          id="age_id"
          name="age"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setAgeValue)
          }
          value={ageValue}
          label="Возраст"
          placeholder="25"
        />
        <Input
          id="job_position_id"
          name="job_position"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setJobPositionValue)
          }
          value={jobPositionValue}
          label="Должность"
          placeholder="Старший специалист"
        />
        <Button name="Создать" onClick={createEmployeeCard} />
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
          <EmployeeInfoContainer>
            <EmployeeTitle>Должность</EmployeeTitle>
            <EmployeeInfoText>{userInfo.jobPosition}</EmployeeInfoText>
          </EmployeeInfoContainer>
        </EmployeeCard>
      )}
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
