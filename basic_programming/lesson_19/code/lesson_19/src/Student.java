package de.javalessons.students;

public class Student {

    private String firstname;

    private String lastname;

    private String groupNumber;

    private int age;

    private String sex;

    private String email;

    public Student(String firstname, String lastname,
                   String groupNumber, int age, String sex, String email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.groupNumber = groupNumber;
        this.age = age;
        this.sex = sex;
        this.email = email;
    }

}
