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
this.resultado="0";
}

igual(n:string, o:string){
  console.log("si");
  console.log(this.num1);
  console.log(this.resultado);
  this.num2= this.resultado;
  if(this.operacion=='+'){
      
    let resultadonum= Number(this.num1)+Number(this.num2);
    console.log(resultadonum);
    this.resultado = resultadonum.toString();
  }else if(this.operacion=='-'){
    let resultadonum= Number(this.num1)-Number(this.num2);
    console.log(resultadonum);
    this.resultado = resultadonum.toString();
  }
  else if(this.operacion=='X'){
    let resultadonum= Number(this.num1) * Number(this.num2);
    console.log(resultadonum);
    this.resultado = resultadonum.toString();
  
}
else if(this.operacion=='/'){
  let resultadonum= Number(this.num1) / Number(this.num2);
  console.log(resultadonum);
  this.resultado = resultadonum.toString();
  
}
}
}
