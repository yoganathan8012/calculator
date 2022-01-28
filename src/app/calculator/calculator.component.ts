import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  FirstNumber:any
  SecondNumber:any
  
  Sum:any
  


  


  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.Sum = this.FirstNumber + this.SecondNumber;
  }
  subtract(){
    this.Sum=this.FirstNumber-this.SecondNumber;
  }
  multiple(){
    this.Sum=this.FirstNumber*this.SecondNumber;
  }
  division(){
    this.Sum=this.FirstNumber/this.SecondNumber;
  }
  clear(){
    this.Sum = '';
    this.FirstNumber = '';
    this.SecondNumber = '';
 
 }
 
}
