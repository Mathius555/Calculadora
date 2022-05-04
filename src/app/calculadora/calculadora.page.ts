import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  
  componentes=["+","-","/","*"];
  resultado="0";
  num1;
  num2;
  operacion;
  final;
  etapa=1;
  inicio=0;

  constructor() { }

  ngOnInit() {
  }



numero(n:string){
console.log("hola");
if(this.resultado=="0"){
  this.resultado = n;
}else{this.resultado = this.resultado+n;}

}



operacionClick(o:string){
this.num1=this.resultado;
this.operacion=o;
this.resultado= "0";
}

igual(n:string, o:string){
  console.log("chi");
  if(this.operacion=='+'){
    this.operacion=o;
    this.resultado=n;
  }else{this.resultado="0";}
  this.resultado=this.resultado+n;
}
  
}








