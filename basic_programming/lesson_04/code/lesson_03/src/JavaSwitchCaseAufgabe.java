package de.javalessons.homework03;

public class JavaSwitchCaseAufgabe {

    /*
    switch (expression) {
    case value1:
        // код для случая 1
        break;

    case value2:
        // код для случая 2
        break;

    // можно добавить сколько угодно case

    default:
        // код, который будет выполняться, если ни один из case не сработает
}
     */
    public static void main(String[] args) {

        int day = 5;
        String dayOfWeek;
        switch (day){
            case 1:
                dayOfWeek = "Понедельник";
                break;
            case 2:
                dayOfWeek = "Вторник";
                break;
            case 3:
                dayOfWeek = "Среда";
                break;
            case 4:
                dayOfWeek = "Четверг";
                break;
            case 5:
                dayOfWeek = "Пятница";
                break;
            case 6:
                dayOfWeek = "Суббота";
                break;
            case 7:
                dayOfWeek = "Воскресенье";
                break;
            default:
                dayOfWeek = "ERROR!!!";
        }
        //System.out.println(dayOfWeek);

        String dayOfWeekNew;
        dayOfWeekNew = switch (day){
            case 1 -> "Понедельник";
            case 2 -> "Вторник";
            case 3 -> "Среда";
            case 4 -> "Четверг";
            default -> "Неправильное значение дня";
        };
        System.out.println(dayOfWeekNew);


    }
}
