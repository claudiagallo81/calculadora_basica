class Calculadora {
    constructor() {
      this.valorActual = 0;
      this.operacionPendiente = null;
    }
  
    sumar(num) {
      this.valorActual += num;
      return this.valorActual;
    }
  
    restar(num) {
      this.valorActual -= num;
      return this.valorActual;
    }
  
    multiplicar(num) {
      this.valorActual *= num;
      return this.valorActual;
    }
  
    dividir(num) {
      if (num === 0) {
        console.log("No se puede dividir entre cero");
        return;
      }
      this.valorActual /= num;
      return this.valorActual;
    }
  
    limpiar() {
      this.valorActual = 0;
      return this.valorActual;
    }
  }
  
  let calculadora = new Calculadora();
  
  function numeroPresionado(num) {
    let resultado = document.getElementById("resultado");
    if (resultado.value === "0") {
      resultado.value = num;
    } else {
      resultado.value += num;
    }
  }
  
  function operacionPresionada(operacion) {
    let resultado = document.getElementById("resultado");
    calculadora.valorActual = parseFloat(resultado.value);
    resultado.value = "0";
    calculadora.operacionPendiente = operacion;
  }
  
  function calcular() {
    let resultado = document.getElementById("resultado");
    switch (calculadora.operacionPendiente) {
      case "+":
        calculadora.sumar(parseFloat(resultado.value));
        break;
      case "-":
        calculadora.restar(parseFloat(resultado.value));
        break;
      case "*":
        calculadora.multiplicar(parseFloat(resultado.value));
        break;
      case "/":
        calculadora.dividir(parseFloat(resultado.value));
        break;
    }
    resultado.value = calculadora.valorActual.toString();
    calculadora.valorActual = 0;
    calculadora.operacionPendiente = null;
  }
  
  function limpiar() {
    let resultado = document.getElementById("resultado");
    resultado.value = "0";
    calculadora.limpiar();
  }