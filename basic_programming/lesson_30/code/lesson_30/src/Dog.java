package de.javalessons.homework25;

public class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof !!!");
    }

    @Override
    public void breathe() {
        System.out.println("Hey I can breathe");
    }


}
