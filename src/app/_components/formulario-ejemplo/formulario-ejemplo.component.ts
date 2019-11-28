import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-formulario-ejemplo',
  templateUrl: './formulario-ejemplo.component.html',
  styleUrls: ['./formulario-ejemplo.component.scss']
})
export class FormularioEjemploComponent implements OnInit {
  option_selected: any;
  OptionList:Array<Object> = [
    {num: 0, name: "AA"},
    {num: 1, name: "BB"},
    {num: 2, name: "CC"},
    {num: 3, name: "DD"},
    {num: 4, name: "EE"},
  ];
  constructor() { }

  ngOnInit() {
    this.option_selected = 0;
  }
  
  //public user = {} //this work fine too
  public user = {fullName:'',email:'',phone:''};
  public confirm_password: any;
  public sucsMsg: any; 
  signup(){
    this.sucsMsg = "Todo está OK.";
    alert('form fields are validated successfully! user.fullName: ' + this.user.fullName + " user.email: "+ this.user.email + " user.phone: "+ this.user.phone + ' confirm_password: '+this.confirm_password); 
  }

  mdlChange($event){
    alert(this.option_selected);
  }

}
