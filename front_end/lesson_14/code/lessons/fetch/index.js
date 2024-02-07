const userCard = document.querySelector(".user-card");
const email = document.querySelector(".email");
const nameOfUser = document.querySelector(".name-of-user");
const getRandomUserButton = document.querySelector(".get-random-user");

const getRandomUser = async () => {
  try {
    let response = await fetch("https://randomuser.me/api/", {
      method: "GET",
    });

    console.log(response);
    // В result может лежать как ошибка(например если status === 400), либо ожидаемые данные(status===200)
    const result = await response.json();
    console.log(result.results[0]);

    const userData = result.results[0];
    // Явно проверям, что если response.ok === false(делать это нужно из-за специфики работы fetch),
    // то генерируем ошибку, и тогда вызывается блок catch
    if (!response.ok) {
      // Если status === 200-299, то response.ok === true
      // Если за пределами 200-299, то response.ok === false
      // Если статус ответа не в пределах 200-299, то считаем это ошибкой
      // и генерируем ее таким образом, чтобы отдать result блок catch
      throw Object.assign(new Error("Some Request Error"), {
        response: result,
      });
    }

    // Добавляем имя пользователя в тег h1
    nameOfUser.innerHTML = `${userData.name.title} ${userData.name.first}  ${userData.name.last}`;
    email.innerHTML = `${userData["email"]}`;
  } catch (error) {
    // Тут будут лежать данные об ошибке
    console.log(error);
    console.log(error.response);
  }
};

getRandomUserButton.addEventListener("click", getRandomUser);
