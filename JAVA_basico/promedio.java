import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class promedio {
    public static void main(String[] args) throws IOException{
        System.out.println("Dame el primer numero");
        Integer numero1 = cargarNumero();
        System.out.println("Dame el segundo numero");
        Integer numero2 = cargarNumero();
        System.out.println("Dame el tercer numero");
        Integer numero3 = cargarNumero();

        calcularNumeroPromedio(numero1, numero2, numero3);
    }

    private static Integer cargarNumero() throws IOException {
        InputStreamReader capturarTeclado = new InputStreamReader(System.in);
        BufferedReader buffer = new BufferedReader(capturarTeclado);
        String strNumero= buffer.readLine();
        Integer numero = Integer.parseInt(strNumero);
        return numero;
    }
    
    private static void calcularNumeroPromedio(Integer numero1,Integer numero2,Integer numero3){
        Double promedio = Double.valueOf(numero1 +numero2 + numero3)/3;
        System.out.println("El numero promedio es : " + promedio);
    }
}

