package de.javalessons.homework05;

import java.util.Scanner;

public class AufgabeJavaForLoop {
    public static void main(String[] args) {

        /*
            for (initialization; termination; increment) {
                 statement(s)
         */
        //Вывести чисто от 1 до 100 на панель i++ = i =i+1
        //i=50 -->i<=52 -->Yes-->i++-->i=51
        //i=51-->i<=52-->Yes-->i++>-->i=52
        //i=52-->i<=52-->Yes-->i++>-->i=53
        //i=53-->i<=52-->No-->-->-->-->...
        for (int i = 0; i <= 52; i++) {
            //System.out.print(i + " ");
            //System.out.println("Hello!!!");
        }
        //System.out.println("Stop");

        //Вывести все четные числа от 1 до 100
        int counter = 0;
        /**
         for (int i = 1; i<= 100; i++){
         boolean result = i%2 == 0;
         if(result) {
         System.out.print(i + " ");
         counter++; //counter = counter +1;
         }
         }
         System.out.println("Counter: " + counter);
         */


        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите слово :");
        String wordString = scanner.next().toLowerCase();

        //"Java"

        /**for (int i=0; i < wordString.length(); i++){
         char checkLetter = wordString.charAt(i);
         if(checkLetter == 'a'){
         counter++;
         }
         }**/
        //Наган
        //System.out.println("Letter was counted: " + counter);


        int wordLenth = wordString.length();
        int letzte = wordLenth - 1;
        int mid = (wordLenth / 2);
        boolean result = true;

        for (int i = 0; i < mid; i++) {
            System.out.println(" Сравниваем " + wordString.charAt(i) + " и " + wordString.charAt(letzte));
            if (wordString.charAt(i) != wordString.charAt(letzte)) {
                result = false;
                break;
            } else {
                letzte--;
            }
        }
        if (result == true) {
            System.out.println("Слово " + wordString + " палиндром");
        } else {
            System.out.println("Слово " + wordString + " не палиндром");
        }


        /*for (int i=0;i<=wordString.length(); i++){
            char checkLetter = wordString.charAt(i);
          if (checkLetter=='a' ) {
              counter++;*/
    }


}

