package de.javalessons.homework25;

public interface Animal {

    //Константа
    String CATEGORY = "Animal";

    void makeSound();


    //Статический метод ( >= Java 8)
    static void showCategory() {
        System.out.println("Category: " + CATEGORY);
    }

    //Дефолтный метод ( >= Java 8)
    default void breathe() {
        System.out.println("I can breathe");
    }
}
