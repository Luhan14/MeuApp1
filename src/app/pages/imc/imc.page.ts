import { CalculosDirective } from './../../directive/calculos.directive';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
altura: number = 0;
peso: number = 0;
imc : number = 0;
condicao : string ="";
  constructor() { }

  ngOnInit() {
  }
  calcular(){
    this.imc = CalculosDirective.calcularImc(this.altura,this.peso);
    this.condicao = CalculosDirective.informarImc(this.imc);
  }

}
