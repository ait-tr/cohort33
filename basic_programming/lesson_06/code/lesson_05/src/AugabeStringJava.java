package de.javalessons.homework04;

public class AugabeStringJava {
    public static void main(String[] args) {
        int numberInt = 120;
        String name = "Mustermann";
        System.out.println(numberInt + " " + name);
        System.out.printf("%d %s", numberInt, name);

        double numberDouble = 1.33554544;
        boolean resultBoolean = true;
        System.out.printf("Double: %.2f Boolean: %b", numberDouble, resultBoolean);

        String text = "Hallo, zusammen ";
        int lenghtText = text.length();
        System.out.println("Длина текста " + lenghtText);

        char letter = text.charAt(0);
        System.out.println("Первая буква " + letter);

        String upperCaseString = text.toUpperCase();
        System.out.println(upperCaseString);

        String lowerCaseString = text.toLowerCase();
        System.out.println(lowerCaseString);

        String substring = text.substring(0, 5);
        System.out.println(substring);

        String concatString = text.concat(" Gruppe 33");
        System.out.println(concatString);

    }
}
