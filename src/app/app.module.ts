import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { WeatherComponent } from './pages/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherProvider } from '../services/weather-provider';
import { CityProvider } from '../services/CityProvider';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [AppComponent, WeatherComponent],
  bootstrap: [AppComponent],
  providers: [, CityProvider, WeatherProvider],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
