package de.javalessons.calculator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorSimTest {

    private CalculatorSim calculatorSim;

    @BeforeEach
    public void setUp() {
        calculatorSim = new CalculatorSim();
    }

    @Test
    public void testAddTwoPositiveNumbers() {
        assertEquals(5, calculatorSim.add(2, 3));
    }

    @Test
    public void testAddTwoNegativeNumbers() {
        assertEquals(-6, calculatorSim.add(-4, -2));
    }

    @Test
    public void testAddTwoResultZero() {
        assertEquals(0, calculatorSim.add(-4, 4));
    }

    @Test
    public void testDivideByZero() {
        assertEquals(-11, calculatorSim.divide(3, 0));
    }

    @Test
    public void testDivideTwoPositiveNumbers() {
        assertEquals(3, calculatorSim.divide(30, 10));
    }


    @Test
    public void testMultiplyPositive() {
        assertEquals(9, calculatorSim.multyply(3, 3));
    }

    @Test
    public void testMultiplyNegative() {
        assertEquals(-9, calculatorSim.multyply(-3, 3));
    }

    @Test
    public void testMultiplyZero() {
        assertEquals(0, calculatorSim.multyply(0, 3));
    }

    @Test
    public void testMultiplication() {
        int a = 2;
        int b = 3;
        int result = a * b;
        assertEquals(6, result);
    }

    @Test
    public void testSubtructPositive() {
        assertEquals(0, calculatorSim.subtract(3, 3));
    }



}
