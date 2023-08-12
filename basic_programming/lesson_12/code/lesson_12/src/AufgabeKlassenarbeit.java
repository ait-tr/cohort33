package de.javalessons.homework11;

public class AufgabeKlassenarbeit {
    public static void main(String[] args) {
        /*
        Напишите программу, которая находит сумму всех элементов
         в массиве целых чисел с использованием цикла `for-each`.
         */
        int[] array = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : array) {
            sum += num;
        }
        System.out.println("Сумма всех элементов массива: " + sum);

        /*
        Напишите программу, которая находит наибольший элемент
         в массиве и выводит его значение.
         */
        int[] array2 = {15, 7, 22, 13, 9};
        int maxElement = 0;
        for (int num : array2) {
            if (num > maxElement) {
                maxElement = num;
            }
        }
        System.out.println("Максимальный элемент: " + maxElement);


        /*
        Напишите программу, которая подсчитывает количество
         элементов в массиве, соответствующих определенному
         условию (например, больше 10).
         */
        int[] array3 = {5, 15, 7, 22, 13, 9};
        int counter = 0;
        for (int num : array3) {
            if (num > 10) {
                counter++;
                System.out.print(num + " ");
            }
        }
        System.out.println("");
        System.out.println("Counter number bigger than ten: " + counter);

        /*
        Напишите программу,
        которая копирует элементы из одного массива в другой.
         */
        int[] sourceArray = {1, 2, 3, 4, 5};
        int[] targetArray = new int[sourceArray.length];
        int index = 0;
        for (int number : sourceArray) {
            targetArray[index] = number;
            index++;
        }
        for (int number : targetArray) {
            System.out.print(number + " ");
        }
        System.out.println("");


        /*
        Напишите программу,
        которая подсчитывает количество букв "а" в строке.
         */
        String text = "Hallo Deutschland";//toCharArray
        int count = 0;
        for (char letter: text.toCharArray()) {
            if (letter == 'a' || letter == 'A') {
                count++;
            }
        }
        System.out.println("Количество букв 'a' в строке: " + count);
    }
}
