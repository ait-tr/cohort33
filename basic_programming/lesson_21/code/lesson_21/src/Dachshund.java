package de.javalessons.zooshop;

public class Dachshund extends Dog {

    public Dachshund(String name, String breed) {
        super(name, "Dachshund");
    }

    public void lookingFor(){
        System.out.println("OK, it was found");
    }
}
