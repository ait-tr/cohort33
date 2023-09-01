

# Инкапсуляция в Java

## Введение

Инкапсуляция — один из четырех основных принципов объектно-ориентированного программирования (ООП), наряду с наследованием, полиморфизмом и абстракцией. Этот принцип означает "скрытие деталей реализации", предоставляя пользователю только необходимые функциональные возможности.

## Сокрытие данных

В Java, для сокрытия данных используются модификаторы доступа: `private`, `protected`, `public`, и "по умолчанию" (package-private).

```java
public class Person {
    private String name;  // Приватное поле, доступно только внутри класса Person
    public int age;       // Публичное поле, доступно из любого места
}
```

## Геттеры и Сеттеры

Для доступа к приватным полям часто используются методы, которые называются "геттерами" и "сеттерами".

```java
public class Person {
    private String name;

    // Геттер
    public String getName() {
        return name;
    }

    // Сеттер
    public void setName(String name) {
        this.name = name;
    }
}
```

## Пример инкапсуляции

```java
public class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    // Депозит
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    // Снятие
    public void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
        }
    }

    // Проверка баланса
    public double getBalance() {
        return balance;
    }
}
```

## Инкапсуляция и Валидация

Инкапсуляция также позволяет вам вставлять логику проверки в сеттеры.

```java
public void setAge(int age) {
    if (age > 0 && age < 150) {
        this.age = age;
    } else {
        System.out.println("Недопустимый возраст");
    }
}
```

## Неизменяемые Объекты (Immutable Objects)

Классы с полями, которые устанавливаются только при создании объекта и не имеют сеттеров, называются неизменяемыми.

```java
public final class ImmutablePoint {
    private final int x;
    private final int y;

    public ImmutablePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

## Заключение

Инкапсуляция позволяет скрыть детали реализации, что делает систему более модульной и легкой для изменения и поддержки. Это также помогает предотвратить непреднамеренные действия, которые могут нарушить состояние объекта.

