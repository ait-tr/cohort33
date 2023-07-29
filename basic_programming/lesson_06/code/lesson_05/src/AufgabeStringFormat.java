package de.javalessons.homework04;

import java.util.Scanner;

public class AufgabeStringFormat {
    public static void main(String[] args) {
        String str = "Hello, Deutschland!";
        System.out.println(str.length());
        //Ответ:18
        System.out.println(str.charAt(4));
        //Ответ: 'o'
        System.out.println(str.toUpperCase());
        //Ответ: HELLO DEUTSCHLAND!
        System.out.println(str.substring(7));
        //Ответ:eutschland!
        System.out.println(str.substring(7, 12));
        //Ответ:eutsc
        char targetChar = ',';
        int index = str.indexOf(targetChar);
        String result = str.substring(0, index);
        System.out.println(result);
        String resultString = str.substring(index + 1, str.length());
        System.out.println(resultString);

        /*
        Напишите программу, которая проверяет, является ли скорость ветра опасной.
        Скорость ветра считается опасной, если она меньше 10 м/с
        или больше 33 м/с. Ваша программа должна принимать
        скорость ветра в качестве входных данных и выводить "Опасно" или "Безопасно".
         */

        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите скорость ветра: ");
        int speedInput = scanner.nextInt();

        int windSpeedMin = 10;
        int windSpeedMax = 33;

        if (speedInput > windSpeedMin && speedInput < windSpeedMax) {
            System.out.println("Безопасно");
        } else {
            System.err.println("Опасно!!!");
        }


    }
}
