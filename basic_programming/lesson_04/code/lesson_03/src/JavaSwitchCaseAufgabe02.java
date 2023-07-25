package de.javalessons.homework03;

import java.util.Scanner;

public class JavaSwitchCaseAufgabe02 {

    //Определить время года по номеру месяца
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите номер месяца для проверки: ");
        int month = scanner.nextInt();

        switch (month){
            case 1,2,12 -> {
                if (month == 1){
                    System.out.print("Январь");
                }
                if (month == 2){
                    System.out.print("Февраль");
                }
                else {
                    System.out.print("Декабрь");
                }
            }
            case 3,4,5 -> System.out.println("Весна");
            case 6,7,8 -> System.out.println("Лето");
            case 9,10,11 -> System.out.println("Осень");
            default -> System.err.println("Неверный номер месяца");
        }
        scanner.close();

    }
}
