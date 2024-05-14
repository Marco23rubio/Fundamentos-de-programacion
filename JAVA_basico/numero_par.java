import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class numero_par {
    public static void main(String[] args) throws IOException {
        System.out.println("Dame el numero");
        Integer numero1 = cargarNumero();
        calcularNumeroPar(numero1);
    }
    private static Integer cargarNumero() throws IOException {
        InputStreamReader capturarTeclado = new InputStreamReader(System.in);
        BufferedReader buffer = new BufferedReader(capturarTeclado);
        String strNumero= buffer.readLine();
        Integer numero = Integer.parseInt(strNumero);
        return numero;
    }
    private static void calcularNumeroPar(Integer numero1){
        if(numero1%2==0){
            System.out.println("El número "+numero1+" si es par");
        }else{
            System.out.println("El número "+numero1+" no es par");
        }
    }
}
