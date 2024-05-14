import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ciclo_numeros_primos {
    public static void main(String[] args) throws IOException {
        System.out.println("Dame el numero");
        Integer dato = cargarNumero();
        Integer contador = 0;

        while(){
            
        }
    }
    private static Integer cargarNumero() throws IOException {
        InputStreamReader capturarTeclado = new InputStreamReader(System.in);
        BufferedReader buffer = new BufferedReader(capturarTeclado);
        String strNumero= buffer.readLine();
        Integer numero = Integer.parseInt(strNumero);
        return numero;
    }
    private static Boolean numPrimos(Integer numero) {
        Boolean esPrimo = true;
        for (int i=2;i<numero;i++){
            if(numero%i==0){
                esPrimo=false;
            }
        } return esPrimo;
/*         if(esPrimo){
            System.out.println("El numero " + numero + " si es primo");
        }else{
            System.out.println("El numero " + numero+ " no es primo");
        } */
    }
}
