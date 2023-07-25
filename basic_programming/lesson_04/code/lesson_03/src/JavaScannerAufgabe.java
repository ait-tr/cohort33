package de.javalessons.homework03;

import java.util.Scanner;

public class JavaScannerAufgabe
{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите Ваше имя:");
        String name = scanner.nextLine();
        System.out.print("Введите Ваш возраст:");
        int age = scanner.nextInt();
        System.out.println("Привет " +  name + " . Ваш возраст: " + age);
        scanner.close();
    }
}
