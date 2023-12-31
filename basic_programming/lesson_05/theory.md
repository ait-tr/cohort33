В Java вы можете выводить в консоль данные разных типов, включая строки и числа, используя команду `System.out.println()`. Пример ниже:

int number = 10;
String someString = "Hallo, zusammen";
System.out.println(someString + " " + someNumber);

В этом примере программа выведет "Hallo, zusammen".

Символ "+" здесь используется для конкатенации, или склеивания, строк. Когда одним из операндов является строка, Java автоматически преобразует остальные данные в строки перед выполнением операции.

Также вы можете использовать `System.out.printf()`, который предоставляет больше контроля над форматом вывода:

int someNumber = 10;
String someString = "Hello, world";

System.out.printf("%s %d%n", someString, someNumber);


В этом примере `%s` означает строку, а `%d` означает десятичное целое число. После `%` можно указывать различные флаги форматирования. `%n` добавляет перевод строки.

Используя System.out.printf(), вы также можете выводить числа с плавающей точкой и логические значения:

double someDouble = 1.234;
boolean someBoolean = true;

System.out.printf("Double: %.3f%nBoolean: %b%n", someDouble, someBoolean);
Здесь %f используется для вывода чисел с плавающей точкой, и вы можете контролировать количество знаков после десятичной точки, используя .3 (в данном случае вывод будет ограничен тремя знаками после десятичной точки). %b используется для вывода логических значений.

Метод `length()` в классе `String` в Java используется для получения длины строки, то есть количество символов (включая пробелы) в строке. Возвращаемое значение является целым числом (`int`). 

Вот пример его использования:

String str = "Hello, world!";
int length = str.length();

System.out.println("The length of the string is: " + length);

В этом примере программа выведет "The length of the string is: 13", поскольку строка "Hello, world!" состоит из 13 символов, включая пробел и знаки препинания. 

Если строка пуста, то есть не содержит ни одного символа, метод `length()` вернет 0.

Метод `charAt()` в классе `String` в Java используется для получения символа в строке по указанному индексу. Входной параметр - это индекс символа, который вы хотите извлечь. Обратите внимание, что индексы в Java начинаются с 0, поэтому первый символ в строке имеет индекс 0, второй - 1, и т.д.

Вот пример его использования:

String str = "Hello, world!";
char characterAtIndex5 = str.charAt(5);

System.out.println("The character at index 5 is: " + characterAtIndex5);

В этом примере программа выведет "The character at index 5 is: ,", поскольку символ на пятом индексе в строке "Hello, world!" является запятой.

Обратите внимание, что если вы попытаетесь получить доступ к символу по индексу, который выходит за пределы длины строки, Java выдаст исключение StringIndexOutOfBoundsException.

Метод `toUpperCase()` в классе `String` в Java используется для преобразования всех символов строки в верхний регистр. Этот метод не принимает никаких аргументов и возвращает новую строку, в которой все символы исходной строки преобразованы в верхний регистр.

Вот пример его использования:

String str = "Hello, world!";
String upperCaseStr = str.toUpperCase();

System.out.println("The upper case string is: " + upperCaseStr);

В этом примере программа выведет "The upper case string is: HELLO, WORLD!", поскольку все символы в исходной строке "Hello, world!" преобразуются в верхний регистр.

Обратите внимание, что исходная строка `str` остается неизменной, так как строки в Java являются неизменяемыми. Метод `toUpperCase()` возвращает новую строку, а не изменяет исходную.

Метод `toLowerCase()` в классе `String` в Java используется для преобразования всех символов строки в нижний регистр. Этот метод не принимает никаких аргументов и возвращает новую строку, где все символы исходной строки преобразованы в нижний регистр.

Вот пример его использования:

String str = "HELLO, WORLD!";
String lowerCaseStr = str.toLowerCase();

System.out.println("The lower case string is: " + lowerCaseStr);

В этом примере программа выведет "The lower case string is: hello, world!", поскольку все символы в исходной строке "HELLO, WORLD!" преобразуются в нижний регистр.

Как и в случае с `toUpperCase()`, исходная строка `str` остается неизменной, так как строки в Java являются неизменяемыми. Метод `toLowerCase()` возвращает новую строку, а не изменяет исходную.

Метод `substring()` в классе `String` в Java используется для получения подстроки из строки. У него есть две формы:

`substring(int beginIndex)`: Эта форма принимает один аргумент - индекс, с которого начинается подстрока. Подстрока включает символ на этом индексе и все символы до конца строки.
   
String str = "Hello, world!";
String substring = str.substring(7);
System.out.println("The substring from index 7 is: " + substring);
   
В этом примере программа выведет "The substring from index 7 is: world!", потому что подстрока начинается с 7-го индекса строки "Hello, world!".

`substring(int beginIndex, int endIndex)`: Эта форма принимает два аргумента - индекс начала и индекс окончания. Подстрока включает символ на индексе начала и все символы до индекса окончания, но не включает символ на индексе окончания.

String str = "Hello, world!";
String substring = str.substring(7, 12);
System.out.println("The substring from index 7 to 12 is: " + substring);
   
В этом примере программа выведет "The substring from index 7 to 12 is: world", потому что подстрока начинается с 7-го индекса и заканчивается на 12-м индексе строки "Hello, world!".

Если в любой из этих методов индексы выходят за пределы длины строки, Java выдаст исключение `StringIndexOutOfBoundsException`
