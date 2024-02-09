const page = document.querySelector(".general-page");
const factAboutCats = document.querySelector(".fact");
const buttonGetCatFact = document.querySelector(".get-cat-fact");

const getInformationAboutCat = async () => {
  // 1 способ использование fetch, с try-catch-finally - более гибкий
  try {
    // Приходит обьект Response
    let response = await fetch("https://catfact.ninja/fact", { method: "GET" });

    // Тут забираем данные которые прислал вам сервер, используя метод json();
    const result = await response.json();

    if (!response.ok) {
      throw Object.assign(new Error("Some Request Error"), {
        response: result,
      });
    }

    factAboutCats.innerHTML = `${result.fact}`;
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }

  // 2 способ использование fetch, без try-catch-finally - менее гибкий
//   let response = await fetch("https://catfact.ninja/fact"); //  { method: "GET" } - можно не прописывать, если у вас GET, т.к fetch по дефолту использует GET, если POST, PUT и т.д указывать Обязательно!

//   const result = await response.json();

//   if (!response.ok) {
//     console.log(result); // тут будет лежать ошибка
//     // тут можно обрабатывать логику ошибки
//   } else {
//     factAboutCats.innerHTML = `${result.fact}`;
//   }
};

buttonGetCatFact.addEventListener("click", getInformationAboutCat);
