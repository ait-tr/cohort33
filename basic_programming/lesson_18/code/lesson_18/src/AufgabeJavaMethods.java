package de.javalessons.homework17;

import java.util.ArrayList;

public class AufgabeJavaMethods {

    public static void main(String[] args) {

    }

    //Рекурсивный метод — это метод, который вызывает сам себя внутри своего тела.
    public static int factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    //С помощью механизма varargs можно передать произвольное количество аргументов одного типа.
    public void printNumbers(int... numbers) {
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
    }


    static void addDelimiter(ArrayList<String> stringsArray) {
        stringsArray.add("-----");
    }

    static ArrayList<String> createArrayList() {
        ArrayList<String> listToReturn = new ArrayList<>();
        listToReturn.add("Test");
        return listToReturn;
    }

    static boolean isValid(ArrayList<String> stringsArray) {
        return stringsArray.size() != 0;

    }
}
