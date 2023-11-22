import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html'
})

export class DbzListComponent {
  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();


  @Input()
  public characterList: Character[] = [
    {
      name:'Trunks',
      power:1
    }
  ]

  
  onDeleteCharacter(index:number):void{
    console.log("deleting", index)
    this.onDeleteId.emit(index);
  }
}