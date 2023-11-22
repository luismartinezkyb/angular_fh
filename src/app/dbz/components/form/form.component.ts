import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html'
})

export class DbzFormComponent {
  
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name:'',
    power:0
  }

  emitCharacter():void{
    
    if(this.character.name.length === 0) return;
    console.log("CHARACTER FROM FORM", this.character)
    this.onNewCharacter.emit(this.character);
    this.character.name= ''
    this.character.power= 0
  }
}