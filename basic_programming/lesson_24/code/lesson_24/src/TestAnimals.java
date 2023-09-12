package de.javalessons.interfaces;

public class TestAnimals {
    public static void main(String[] args) {
        Animal animalDog = new Dog();
        Animal animalCat = new Cat();

        animalDog.makeSound();
        animalCat.makeSound();

        animalDog.eat();
        animalCat.eat();

    }
}
