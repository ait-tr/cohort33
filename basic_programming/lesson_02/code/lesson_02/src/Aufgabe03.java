package de.zimmermann.lesson_02;

public class Aufgabe03 {
    public static void main(String[] args) {
        /*
         Посчитайте зарплату программиста после вычета налогов в Германии
         */

        int gehaltBrutto = 4500;

        //Налог на солидарность
        int solidaritaetszuschlag = 0;

        //церковный налог
        int kirchensteuer = 30;

        boolean kirche = false;


        //налог на заработную плату
        int lohnsteuer = 375;

        //взнос в пенсионный фонд
        int rentenversicherung = 419;

        //страховка по безработице
        int arbeitslosenversicherung = 59;

        //медицинская страховка
        int krankenversicherung = 365;

        //налог на уход
        int pflegeversicherung = 104;

        int gehaltNetto = gehaltBrutto - solidaritaetszuschlag - lohnsteuer - rentenversicherung - arbeitslosenversicherung - krankenversicherung - pflegeversicherung;

        if(kirche == true){
            gehaltNetto = gehaltNetto - kirchensteuer;
        }

        System.out.println("Brutto: " + gehaltBrutto);
        System.out.println("Netto: " + gehaltNetto);
        System.out.println("Steuer: " + (gehaltBrutto - gehaltNetto));

        kirche = true;

        if(kirche == true){
            gehaltNetto = gehaltNetto - kirchensteuer;
        }

        System.out.println("----------");
        System.out.println("Brutto: " + gehaltBrutto);
        System.out.println("Netto: " + gehaltNetto);
        System.out.println("Steuer: " + (gehaltBrutto - gehaltNetto));


    }
}
