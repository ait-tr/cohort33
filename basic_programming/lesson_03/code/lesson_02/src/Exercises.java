package de.zimmermann.lesson_02;

public class Aufgabe01 {
    public static void main(String[] args) {
				int age = 23;
		        //String language = "China";
		        String language = "German";
		        boolean drivinglicence = true;

		        String languageLevel = "B1";

		        if (age >= 18 && age <= 67 && drivinglicence == true) {

		            System.out.println("Вы кандидат");
		            if ((language.equals("China") || language.equals("German")) && languageLevel.equals("C1")) {

		                System.out.println("Вы можете работать");
		            } else {
		                System.err.println(" Учите  язык");
		            }
		        } else {
		            System.out.println("Вакансия не для Вас!!!");
		        }
}
