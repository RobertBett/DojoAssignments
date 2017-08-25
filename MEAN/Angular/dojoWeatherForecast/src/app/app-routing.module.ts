import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";

import { WeatherComponent } from "./weather/weather.component";
import { SeattleComponent } from "./seattle/seattle.component";
import { SanJoseComponent } from "./san-jose/san-jose.component";
import { BurbankComponent } from "./burbank/burbank.component";
import { DallasComponent } from "./dallas/dallas.component";
import { DCComponent } from "./dc/dc.component";
import { ChicagoComponent } from "./chicago/chicago.component";

const routes: Routes = [
    {path:"",pathMatch:"full",component:WeatherComponent},
    {path:"seattle",component:SeattleComponent},
    {path:"sanjose",component:SanJoseComponent},
    {path:"burbank",component:BurbankComponent},
    {path:"dallas",component:DallasComponent},
    {path:"dc",component:DCComponent},
    {path:"chicago",component:ChicagoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}