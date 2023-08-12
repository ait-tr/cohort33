package de.javalessons.homework11;

import java.lang.reflect.Array;
import java.util.Arrays;

public class AufgabeJavaForEach {

    public static void main(String[] args) {
        /**
          for (Тип_элемента переменная : коллекция) {
              // тело цикла
          }
         */
        int[] array = new int[]{30, 20, 40, 90, 40, 40, 55};

        for(int number: array){
            //System.out.print(number + " ");
            if(number == 20){
                System.out.println("20!!!!");
            }
        }

       //Копирование массивов
        int[] arrayCopy = Arrays.copyOf(array, array.length);

        //Сравнение массивов
        boolean copyResult = Arrays.equals(array, arrayCopy);

        //Заполнение массива
        Arrays.fill(arrayCopy, 999);

        //Сортировка массива
        Arrays.sort(array);




        for(int i=0; i< array.length; i++){
            if(array[i] == 20){
                System.out.println("20!!!!");
                array[i]= 300;
            }
        }


    }
}
