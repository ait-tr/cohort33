package de.javalessons.homework22;

public class WindInstrument extends MusicalInstrument {

    private String material;

    public WindInstrument(String name, String type, double price, String material) {
        super(name, type, price);
        this.material = material;
    }

    @Override
    public void play(){
        System.out.println("Играет " + getName() + " из " + material);
    }

    @Override
    public double getRentalCost(int days){
        return (getPrice()*0.1 + 50.0) * days;
    }

    @Override
    public void sell(){
        if(material.equals("дерево")) {
            double preis = getPrice();
            setPrice(preis * 0.7);
        }
        else {
            super.sell();
        }
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }




}
