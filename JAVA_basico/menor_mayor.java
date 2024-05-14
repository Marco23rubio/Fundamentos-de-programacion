import java.util.Scanner;

public class menor_mayor {
    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("Introduzca el primer numero:");
        try (Scanner entradaEscaner1 = new Scanner(System.in)) {
            String strEntradaTeclado1 = entradaEscaner1.nextLine();
            Integer dato1 = Integer.parseInt(strEntradaTeclado1);
            System.out.println("Introduzca el segundo numero:");
            try (Scanner entradaEscaner2 = new Scanner(System.in)) {
                String strEntradaTeclado2 = entradaEscaner2.nextLine();
                Integer dato2 = Integer.parseInt(strEntradaTeclado2);
                System.out.println("Introduzca el tercer numero:");
                try (Scanner entradaEscaner3 = new Scanner(System.in)) {
                    String strEntradaTeclado3 = entradaEscaner3.nextLine();
                    Integer dato3 = Integer.parseInt(strEntradaTeclado3);
                    Integer mayor = 0;
                    Integer menor = 0;
                    if(dato1>dato2){
                        mayor=dato1;
                        menor=dato2;
                        if(mayor>dato3){
                            if(dato3<menor){
                                menor=dato3;
                            }
                        }else{
                            mayor=dato3;
                        }
                    }else{
                        mayor=dato2;
                        menor=dato1;
                        if(mayor>dato3){
                            if(dato3<menor){
                                menor=dato3;
                            }
                        }else{
                            mayor=dato3;
                        }
                    }System.out.println("El numero mayor es:"+mayor+" /n El numero menor es:"+menor);
                }
            }
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
    }
}
