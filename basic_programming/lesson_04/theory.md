Класс Math в Java предоставляет готовые методы для выполнения математических операций, таких как вычисление логарифмов, округление чисел, нахождение квадратного корня и т.д. 

Вот некоторые основные методы:

1. `Math.abs()`: возвращает абсолютное значение аргумента. 

   Пример:
   int a = Math.abs(-15);
   System.out.println(a);  // выведет 15
   

2. `Math.ceil()`: округляет значение вверх до ближайшего целого числа. 

   Пример:
   double b = Math.ceil(4.2);
   System.out.println(b);  // выведет 5.0
   

3. `Math.floor()`: округляет значение вниз до ближайшего целого числа. 

   Пример:
   double c = Math.floor(4.7);
   System.out.println(c);  // выведет 4.0
   

4. `Math.sqrt()`: возвращает квадратный корень аргумента. 

   Пример:
   double d = Math.sqrt(16);
   System.out.println(d);  // выведет 4.0
   

5. `Math.pow()`: возводит первый аргумент в степень второго аргумента. 

   Пример:
   double e = Math.pow(2, 3);
   System.out.println(e);  // выведет 8.0
  

6. `Math.max()`: возвращает наибольшее из двух чисел.

   Пример:
   int f = Math.max(5, 10);
   System.out.println(f);  // выведет 10
   

7. `Math.min()`: возвращает наименьшее из двух чисел.

   Пример:
   int g = Math.min(5, 10);
   System.out.println(g);  // выведет 5
   

8. `Math.random()`: возвращает псевдослучайное число между 0.0 и 1.0.

   Пример:
   double h = Math.random();
   System.out.println(h);  // выведет случайное число между 0.0 и 1.0
   
   
   
В Java, оператор switch-case используется для контроля потока выполнения программы на основе значения определенной переменной или выражения. Вот пример использования switch-case:


int day = 3;
String dayOfWeek;

switch (day) {
    case 1:
        dayOfWeek = "Monday";
        break;
    case 2:
        dayOfWeek = "Tuesday";
        break;
    case 3:
        dayOfWeek = "Wednesday";
        break;
    case 4:
        dayOfWeek = "Thursday";
        break;
    case 5:
        dayOfWeek = "Friday";
        break;
    case 6:
        dayOfWeek = "Saturday";
        break;
    case 7:
        dayOfWeek = "Sunday";
        break;
    default:
        dayOfWeek = "Invalid day";
}

System.out.println(dayOfWeek); // Output: Wednesday


В этом примере, в зависимости от значения переменной `day`, переменной `dayOfWeek` присваивается соответствующий день недели.

Важно отметить, что в каждом блоке `case` стоит оператор `break`, чтобы прервать выполнение остальных блоков после того, как один из них будет выполнен. Если `break` отсутствует, то выполнение продолжится до следующего `case` и так далее, до тех пор, пока не встретится `break` или не закончится блок `switch`.

Также есть блок `default`, который выполняется, если ни один из блоков `case` не совпадает с выражением в `switch`.

В Java SE 7 и более поздних версиях, в выражении `switch` можно использовать строки (String), помимо примитивных типов данных и перечислений (Enum).

В дополнение к предыдущему ответу, обратите внимание, что начиная с Java 12, можно использовать оператор `switch` в качестве выражения. Это делает код чище и более читаемым, особенно когда `switch` используется для присваивания значения переменной. Это также устраняет необходимость в `break`. Ниже приведен пример:


int day = 3;
String dayOfWeek;

dayOfWeek = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4 -> "Thursday";
    case 5 -> "Friday";
    case 6 -> "Saturday";
    case 7 -> "Sunday";
    default -> "Invalid day";
};

System.out.println(dayOfWeek); // Output: Wednesday


В этом примере, вместо использования `:` и `break` после каждого `case`, используется оператор `->`. Все, что после `->` является значением, возвращаемым этим `case`. Если ни один из `case` не совпадает, то выполняется блок `default` и возвращается его значение.

Помимо этого, с Java 14, вы также можете использовать операторы `switch` с формой блока `case`, которые позволяют объявлять переменные, специфичные для каждого `case`. Это может быть полезно, когда вам нужно выполнить сложные вычисления внутри `case`:

int number = 3;
String result;

result = switch (number) {
    case 1 -> {
        String message = "One";
        yield message;
    }
    case 2 -> {
        String message = "Two";
        yield message;
    }
    case 3 -> {
        String message = "Three";
        yield message;
    }
    default -> {
        String message = "Invalid number";
        yield message;
    }
};

System.out.println(result); // Output: Three


В этом примере, переменная `message` объявляется внутри каждого блока `case`, и ее значение возвращается с помощью ключевого слова `yield`.   
   