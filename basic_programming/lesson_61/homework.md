
### Задание 1: Поток-Бармен
**Задача**: Создайте класс `BartenderThread`, который расширяет `Thread`. В методе `run()` этого класса, бармен должен готовить напиток, выводя на экран сообщения: "Готовлю напиток", затем "Напиток готов" с задержкой в 3 секунды между сообщениями.


### Задание 2: Поток-Кофеварка
**Задача**: Создайте класс `CoffeeMakerThread`, который расширяет `Thread`. Класс должен имитировать процесс приготовления кофе, выводя сообщения "Кофе мелется", "Кофе заваривается", и "Кофе готов" с задержкой в 2, 5 и 1 секунду соответственно.


### Задание 3: Множество Потоков-Барменов
**Задача**: Создайте и запустите три потока `BartenderThread`, каждый из которых будет готовить разные напитки (например, чай, кофе, коктейль).


### Задание 4: Поток-Сомелье
**Задача**: Создайте класс `SommelierThread`, который расширяет `Thread`. Этот класс должен имитировать процесс выбора вина, выводя сообщения "Выбираю вино", "Вино выбрано: [название]" с задержкой в 2 секунды между ними. Название вина передается в конструкторе.


### Задание 5: Поток-Чайный Мастер
**Задача**: Создайте класс `TeaMasterThread`, который расширяет `Thread`. В методе `run()` этого класса должен происходить процесс заваривания чая с выводом сообщений "Завариваю чай: [тип чая]", "Чай готов" с задержкой в 4 секунды. Тип чая передается в конструкторе.


### Задание 6: Параллельное Приготовление Напитков
**Задача**: Используя классы `BartenderThread`, `CoffeeMakerThread` и `SommelierThread`, запустите их одновременно для имитации одновременного приготовления различных напитков в кафе.
