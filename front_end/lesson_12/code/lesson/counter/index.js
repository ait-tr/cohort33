// Мы должны получить доступ ко всем необходимым элементам
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const count = document.querySelector("#counterId");

// Создаем переменную counter, котрая будет хранить актуальное значение счетчика
let counter = 0;

// Создем 2 функции, котрые увеличвают на 1 и уменьшают на 1
const plus = () => {
  counter++;
  console.log(counter);
  count.innerHTML = counter;
};

const minus = () => {
  counter--;
  console.log(counter);
  count.innerHTML = counter;
};

// прослушка событий: чтобы наши кнопки прибавляли на 1 и отнимали 1
minusButton.addEventListener("click", minus);
plusButton.addEventListener("click", plus);
