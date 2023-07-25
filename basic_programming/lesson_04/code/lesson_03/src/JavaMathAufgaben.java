package de.javalessons.homework03;

public class JavaMathAufgaben {
    public static void main(String[] args) {

        //Math.abs()`: возвращает абсолютное значение аргумента.
        double number = Math.abs(-15.45);
        System.out.println(number);

        //`Math.ceil()`: округляет значение вверх до ближайшего целого числа.
        double numberDouble = Math.ceil(4.2);
        //System.out.println(numberDouble);

        //Math.floor()`: округляет значение вниз до ближайшего целого числа.
        double numberDoubleFloor = Math.floor(4.7);
        //System.out.println(numberDoubleFloor);

        //`Math.max()`: возвращает наибольшее из двух чисел.
        int x = 10;
        int y = 2*x;
        int numberMax = Math.max(x,y);
        //System.out.println(numberMax);

        //`Math.min()`: возвращает наименьшее из двух чисел.
        int numberMin = Math.min(x,y);
        //System.out.println(numberMin);

        //`Math.random()`: возвращает псевдослучайное число между 0.0 и 1.0.
        double randomDouble = Math.random();
        //System.out.println(randomDouble);





    }
}
