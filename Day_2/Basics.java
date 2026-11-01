public class Basics {
    public static void main(String[] args) {
        int age = 20;
        double marks = 85.5;
        char grade = 'A';
        boolean passed = true;
        String name = "Pranav";

        System.out.println("Name: " + name + ", Age: " + age);
        System.out.println("Marks: " + marks + ", Grade: " + grade + ", Passed: " + passed);

        int a = 10, b = 3;
        System.out.println("Sum: " + (a + b));
        System.out.println("Difference: " + (a - b));
        System.out.println("Product: " + (a * b));
        System.out.println("Quotient: " + (a / b));
        System.out.println("Remainder: " + (a % b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a > 5 && b < 5: " + (a > 5 && b < 5));
    }
}