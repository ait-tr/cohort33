package de.javalessons.calculator;

public class CalculatorSim {

    public int add(int a, int b){
        int first = a;
        int second = b;
        return first+second;
    }

    public int subtract (int a, int b){
        return a-b;
    }

    public int multyply(int a, int b){
        return a * b;
    }

    public double divide(int a, int b){
        if(b == 0){
            System.out.println("Деление на 0 !!!!");
            return -1;
        }
        else {
            //Указание на расчет деления в формате double
           return (double) a/b;
        }
    }

}
