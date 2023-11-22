import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html'
})

export class DbzListComponent {
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [
    {

      name:'Trunks',
      power:1
    }
  ]

  
  onDeleteCharacter(id?:string):void{
    // console.log("deleting", index)
    if(!id) return;
    this.onDeleteId.emit(id);
  }
}