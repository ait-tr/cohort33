package de.javalessons.homework13;

import java.util.ArrayList;
import java.util.Iterator;

public class AufgabeArrayListDelete {
    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<String>();

        //Добавляем в него элементы
        fruits.add("Apple");
        fruits.add("Banan");
        fruits.add("Sweet Cherry");
        fruits.add("Melon");
        fruits.add("Blackberry");
        System.out.println(fruits);

        //#1 Index
        fruits.remove(1);

        System.out.println(fruits);

        //#2
        fruits.remove("Apple");
        System.out.println(fruits);

        Iterator<String> iterator = fruits.iterator();
        while (iterator.hasNext()){
            String element = iterator.next();
            if (element.equals("Melon")){
                iterator.remove();
            }
        }

        System.out.println(fruits);

    }

}
