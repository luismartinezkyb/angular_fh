import { NgModule } from "@angular/core";
import { ListComponent } from "./components/list/list.component";
import { HeroComponent } from "./components/hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports:[
    CommonModule
  ],
  declarations:[
    ListComponent,
    HeroComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ]
})
export class HeroModule{

}