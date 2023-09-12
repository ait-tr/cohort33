package de.javalessons.interfaces;

public class Division implements Operation{
    @Override
    public double execute(double numberOne, double numberTwo) {
        if(numberTwo != 0){
            return numberOne/numberTwo;
        }
        else {
            System.err.println("Деление на 0!!!");
            return Double.NaN;
        }

    }
}
