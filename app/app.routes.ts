import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';
import { WeatherComponent } from './weather/weather.component';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent }
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]