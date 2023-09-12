package de.javalessons.interfaces;

public class Addition  implements Operation {

    @Override
    public double execute(double numberOne, double numberTwo) {
        return numberOne + numberTwo;
    }
}
