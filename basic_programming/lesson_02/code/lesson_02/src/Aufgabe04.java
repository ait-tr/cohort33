package de.zimmermann.lesson_02;

public class Aufgabe04 {
    public static void main(String[] args) {
        /**
         * Создайте переменную radius типа double и
         * присвойте ей значение радиуса окружности.
         * Затем создайте вторую переменную area и вычислите площадь круга
         * по формуле π*r^2. Выведите значение area на консоль.
         */

        //Создаем переменную типа double и присваиваем значение радиуса окружности
        double radius = 100.245;

        //Создаем переменную area типа double равной π*r^2
        double area = Math.PI * Math.pow(radius,2);

        //Выводим значение на экран
        System.out.println("The area of circle is: " + area);


    }
}
