import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WeatherService } from './services/weather.service';

import { AppComponent } from './app.component';
import { TemperaturePipe } from './temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
