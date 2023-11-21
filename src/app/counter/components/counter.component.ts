import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  template: `
    <p>Contador: {{counter}}</p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">+1</button>
    <button (click)="onReset()">reset</button>

    <hr>
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter += value
  }

  onReset():void{
    this.counter = 10;
  }
}