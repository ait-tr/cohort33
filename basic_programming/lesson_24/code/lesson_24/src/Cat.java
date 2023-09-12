package de.javalessons.interfaces;

public class Cat implements Animal{
    @Override
    public void makeSound() {
        System.out.println("Mjau");
    }

    @Override
    public void eat() {
        System.out.println("Cat eats birds");
    }
}
