import java.util.Scanner;

public class inputs {
    public static void main(String[] args){
        System.out.println("Introduzca su edad:");
        try (Scanner entradaEscaner = new Scanner(System.in)) {
            String strEntradaTeclado = entradaEscaner.nextLine();
            Integer edad = Integer.parseInt(strEntradaTeclado);
            if(edad>=18){
                System.out.println("Es mayor de edad");
            }else if(edad<18){
                System.out.println("Es menor de edad");
            }
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
    }
}

