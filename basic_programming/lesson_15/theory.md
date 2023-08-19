**1. Введение**

Методы в Java представляют собой блок кода, который выполняется при его вызове. Методы используются для повторного использования кода: определите код один раз и вызывайте его многократно.

**2. Основы методов**

Базовый синтаксис объявления метода:
```java
тип_возвращаемого_значения имя_метода(список_параметров) {
    // тело метода
}
```

**3. Примеры методов**

а) Метод без параметров и возвращаемого значения:

```java
void displayMessage() {
    System.out.println("Hello, Java!");
}
```

б) Метод с параметрами:

```java
void displayMessage(String message) {
    System.out.println(message);
}
```

в) Метод с возвращаемым значением:

```java
int addNumbers(int a, int b) {
    return a + b;
}
```

**4. Перегрузка методов**

В Java можно иметь несколько методов с одинаковым именем, но с разным числом/типом параметров.

```java
void print(int a) {
    System.out.println(a);
}

void print(double a) {
    System.out.println(a);
}

void print(String message) {
    System.out.println(message);
}
```

**5. Рекурсивные методы**

Метод может вызывать сам себя. Это называется рекурсией.

```java
int factorial(int n) {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
}
```

**6. Возвращение нескольких значений**

Java не позволяет напрямую возвращать несколько значений из метода. Однако можно использовать объекты или массивы.

```java
int[] findMinMax(int[] arr) {
    int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
    for (int num : arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return new int[]{min, max};
}
```

**7. Varargs (переменное число аргументов)**

В Java есть возможность передать неопределенное количество аргументов в метод, используя varargs.

```java
void displayNames(String... names) {
    for (String name : names) {
        System.out.println(name);
    }
}
```