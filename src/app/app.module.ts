import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';

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
    HttpModule,
    Angular2FontawesomeModule
  ],
  providers: [ WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
