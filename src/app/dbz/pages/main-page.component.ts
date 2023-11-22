import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  
  public characters: Character[]=[
    {
      name:'Krillin',
      power:100
    },
    {
      name:'Goku',
      power:9600
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];
  addCharacter(character:Character):void{
    this.characters.push(character)
    // console.log(character)
  }

  deleteCharacter(id:number):void{

    // console.log(id);
    this.characters= this.characters.filter((character, index)=>id!==index);
  }
}