const args = process.argv

if (args.length !==5){
  console.log("Formato correcto: node calculadora.js <operador1> <operacion> <operador2> --> Ejemplo: node calculadora.js 10 + 2 ")
  console.log("Recuerda utilizar '*' con el asterisco")
  process.exit(1);
}
let operador1 = args[2];
let operacion = args[3]
let operador2 = args[4];
let op1F = parseFloat(operador1);
let op2F = parseFloat(operador2);

if(isNaN(op1F) || isNaN(op2F)){
  console.log("Argumentos inválidos --> node calculadora.js 13 + 22")
  process.exit(1);
}



switch(operacion){
 
  case "+" :
    result = op1F + op2F;
    break;

 

    
  case "-" :
    result= op1F - op2F;
    break;
  






  case "*":
    result = op1F * op2F
    break;

  case "x":
    result = op1F * op2F
    break;

  case "X":
    result = op1F * op2F
    break;





  case "/":
    if(op2F == 0){
      console.log("Error: No se puede realizar divisiones entre 0")
      process.exit(1)
    } 
    result = op1F / op2F
    break







    
  default:
    console.log("Error símbolo no reconocido. Operadores admitido: +, -, '*', x, X, /");
    process.exit(1);
    break

}

console.log("El resultado es: ",result)

