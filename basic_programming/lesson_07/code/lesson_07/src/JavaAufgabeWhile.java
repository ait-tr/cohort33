package de.javalessons.homework06;

import java.util.Scanner;

public class JavaAufgabeWhile {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите число: ");
        int numberInt = scanner.nextInt();

        while (numberInt != 0){
            System.out.println("Ожидаю другое число: ");
            numberInt = scanner.nextInt();
        }
        System.out.println("Число введено верно");

        System.out.print("Введите слово: ");
        String checkWord = scanner.next();
        while (!checkWord.equals("stop")){
            System.out.println("Ожидаю другое слово: ");
            checkWord = scanner.next();
        }
        System.out.println("Слово введено верно");

    }
}
