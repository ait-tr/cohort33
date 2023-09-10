package de.javalessons.homework22;

import java.util.ArrayList;

public class MusicalInstrumentTest {
    public static void main(String[] args) {
        /**StringInstrument stringInstrument = new StringInstrument("Гитара", "Струнный",150.0, 6);
        stringInstrument.play();

        WindInstrument windInstrument = new WindInstrument("Дудук", "Духовой", 1000.0, "деревоX");
        windInstrument.play();

        ArrayList<MusicalInstrument> musicalInstruments = new ArrayList<>();
        musicalInstruments.add(stringInstrument);
        musicalInstruments.add(windInstrument);

        System.out.println("--------------------");

        for (MusicalInstrument instrument: musicalInstruments){
            instrument.play();
        }

        System.out.println("--------------------");
        System.out.println("Стоимость аренды гитары на 5 дней: " + stringInstrument.getRentalCost(5));
        System.out.println("Стоимость аренды" + windInstrument.getName() + " на 5 дней: " + windInstrument.getRentalCost(5));

        System.out.println("--------------------");
        windInstrument.sell();
        System.out.println(windInstrument.getPrice());*/

        SmallWindInstrument smallWindInstrument = new SmallWindInstrument("Флейта" , "духовой", 50, "дерево", 350);
        smallWindInstrument.sell();
        System.out.println(smallWindInstrument.getMaterial());
        System.out.println(smallWindInstrument.getName());
        System.out.println(smallWindInstrument.getPrice());
        // smallWindInstrument.play();





    }
}
