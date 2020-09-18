import { Directive } from '@angular/core';

@Directive({
  selector: '[appCalculos]'
})
export class CalculosDirective {
static calcularImc(altu: number, peso: number):number{
  return (peso / (altu * altu));
}
static informarImc(imc: number): string {
  if (imc<16) 
      return "Magreza grave";
    else if(imc< 17)
      return "Magreza modera"
    else if(imc < 18.5)
      return "Magreza leve";
    else if(imc < 25)
      return "Saudável";
    else if(imc < 30)
      return "Sobrepeso";
    else if(imc < 35)
      return "Obesidade grau I";
    else if(imc < 40)
      return "Obesidade grau II (SEVERA)";
    else
      return "Obesidade grau III (MÓRBIDA)";
}


  constructor() { 
    console.log("Diretiva no Ar");
  }
    
}
