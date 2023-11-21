import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = [
    'Spiderman',
    'Hulk',
    'Ironman',
  ];
  public deletedHero?:string = '';
  public deleted:boolean = false;

  onDeleteHero():void{
    this.deletedHero = this.heroes.pop();
    this.deleted = true;
  }
}
