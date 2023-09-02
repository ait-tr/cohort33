package de.javalessons.zooshop;

public class Animal {

    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public void makeSound(){
        System.out.println("Animal makes a sound");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
