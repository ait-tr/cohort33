package de.javalessons.interfaces;

public class TestOperation {
    public static void main(String[] args) {

        Operation operation = new Addition();
        System.out.println(operation.execute(10, 24));

        operation = new Division();
        System.out.println(operation.execute(30, 15));

        operation = new Multiplication();
        System.out.println(operation.execute(10, 2));

        operation = new Subtraction();
        System.out.println(operation.execute(30, 20));
    }
}
