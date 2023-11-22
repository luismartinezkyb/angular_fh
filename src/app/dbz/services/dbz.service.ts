import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }
  public characters: Character[]=[
    {
      id:uuid(),
      name:'Krillin',
      power:100
    },
    {
      id:uuid(),
      name:'Goku',
      power:9600
    },
    {
      id:uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character:Character):void{
    console.log("CARACTER",character)
    const newCharacter:Character = {...character, id:uuid()}
    this.characters.push(newCharacter)
    // console.log(character)
  }

  deleteCharacterById(id:string):void{

    // console.log(id);
    this.characters= this.characters.filter((character)=>id!==character.id);
  }
}