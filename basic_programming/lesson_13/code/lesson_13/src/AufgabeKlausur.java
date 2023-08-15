package de.javalessons.homework12;

import java.util.ArrayList;
import java.util.Random;

public class AufgabeKlausur {
    /**
     * Создать программу, которая будет выполнять следующие действия:
     *
     * Добавление элементов
     * Создайте ArrayList для хранения целых чисел.
     * Заполните его десятью случайными целыми числами от 1 до 100.
     *
     * Удаление четных чисел
     * Пройдите по списку и удалите все четные числа.
     *
     * Вывод оставшихся элементов
     * Выведите оставшиеся элементы списка в консоль.
     *
     * Вычисление среднего значения
     * Вычислите и выведите среднее значение оставшихся в списке элементов.
     *
     * Random random = new Random();
     * random.nextInt(100) + 1
     */

    public static void main(String[] args) {
        /*
        Добавление элементов
      Создайте ArrayList для хранения целых чисел.
      Заполните его десятью случайными целыми числами от 1 до 100.
         */
        ArrayList<Integer> numbers = new ArrayList<>();
        Random random = new Random();

        for (int i = 0; i < 10; i++) {
            Integer rundomNumber = random.nextInt(100) + 1;
            numbers.add(rundomNumber);
        }

        System.out.println("Исходный список: " + numbers);

        //Удаление четных чисел
        for (int i=0; i < numbers.size(); i++) {
            if (numbers.get(i) % 2 == 0) {
                numbers.remove(i);
                i--;// Уменьшение индекса из-за сдвига элементов после удаления
            }
        }

        //Вывод оставшихся элементов
        System.out.println("Список после удаления четных чисел: " + numbers);

        //Вычисление среднего значения
        int sum = 0;
        for (int num: numbers){
            sum += num;
        }
        if(!numbers.isEmpty()){
            double result = (double) sum/ numbers.size();
            System.out.println("Среднее значение: " + result);
        }
        else {
            System.out.println("Список пуст");
        }
    }
}
