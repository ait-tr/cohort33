

Класс, который наследует свойства другого класса, называется подклассом (производным классом, наследующим классом), а класс, свойства которого наследуются, известен как суперкласс (базовый класс, родительский класс)

Наследование в Java позволяет повторно использовать код одного класса в другом классе, то есть вы можете унаследовать новый класс от уже существующего класса. Главный наследуемый класс в Java называют родительским классам, или суперклассом. Наследующий класс называют дочерним классом, или подклассом. Подкласс наследует все поля и свойства суперкласса, а также может иметь свои поля и свойства, отсутствующие в классе-родителе.



### Иерархия классов

Допустим, у нас есть иерархия пород собак, которую мы хотим представить в коде. Помимо общего класса `Animal` и `Dog`, мы можем создать дополнительные подклассы, такие как `Bulldog` и `Husky`.

#### Класс Animal

```java
public class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}
```

#### Класс Dog

```java
public class Dog extends Animal {

    String breed;

    public Dog(String name, String breed) {
        super(name);  // Вызов конструктора базового класса
        this.breed = breed;
    }

    @Override
    public void makeSound() {
        System.out.println("Woof Woof");
    }
}
```

#### Классы Bulldog и Husky

```java

public class Bulldog extends Dog {

    public Bulldog(String name) {
        super(name, "Bulldog");
    }

    public void snore() {
        System.out.println("Zzzz");
    }
}

public class Husky extends Dog {

    public Husky(String name) {
        super(name, "Husky");
    }

    public void pullSled() {
        System.out.println("I can pull a sled!");
    }
}
```
