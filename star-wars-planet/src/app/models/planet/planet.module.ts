import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PlanetModule { }
export interface Planet {
  name: string;
  climate: string;
  population: string;
  terrain: string;
  residents: string[];
}
