import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  keyframes,
  animate } from '@angular/core'
import { WeatherData } from './weatherData';
import { WeatherDataService } from './weather-data.service'

@Component({
  selector: 'weather',
  templateUrl: 'app/weather/forecast-item.component.html',
  styleUrls: ['app/weather/weather.component.css'],
  providers: [WeatherDataService],
  host: {
    '[@routeAnimation]': 'true',
    '[style.display]': "'block'"
  },
  animations: [
    trigger('routeAnimation', [
      transition('void => *', [
        animate('0.5s linear', keyframes([
          style({
                  transform:'scale(1,0.8) translate3d(0,0,0)',
                  filter:'brightness(30)',
                  opacity:1,
                  offset:0
                }),
          style({transform:'scale(1,0.8) translate3d(0,100%,0)', offset: 0.035}),
          style({transform:'scale(1,0.8) translate3d(0,-100%,0)', opacity:1, offset: 0.036}),
          style({
                transform:'scale(1.3,0.6) translate3d(0,100%,0)',
                filter:'brightness(30)',
                opacity:0,
                offset: 0.09
              }),
          style({
                transform:'scale(1,1) translate3d(0,0,0)',
                filter:'contrast(0) brightness(30)',
                opacity:0,
                offset: 0.11
              }),
          style({
                transform:'scale(1,1) translate3d(0,0,0)',
                filter:'contrast(1) brightness(1.2) saturate(1.3)',
                opacity:1,
                offset: 1
              })
        ]))
      ]),
      transition('* => void', [
        animate('0.125s cubic-bezier(0.230, 1.000, 0.320, 1.000)', keyframes([
          style({
            transform:'scale(1,1.3) translate3d(0,0,0)',
            filter:'brightness(1)',
            opacity:1,
            offset:0
          }),
          style({
            transform:'scale(0.000,0.0001) translate3d(0,0,0)',
            filter:'brightness(50)',
            offset:1
          })
        ]))
      ])
    ])
  ]
})
export class WeatherComponent {
  errorMessage: string;
  weatherData: WeatherData[];
  mode = 'Observable';
  txtForecast;
  simpleForecast;
  conditions;


  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherDataService.getWeather()
        .subscribe(
          data => {
            this.weatherData = data;
            this.txtForecast = data.forecast.txt_forecast.forecastday;
            this.simpleForecast = data.forecast.simpleforecast.forecastday;
            this.conditions = data.current_observation;
          },
          error => this.errorMessage = <any>error);
  }

  // So these work, and they can be called from the template, but the compiler doesn't like them.

  // set txtForecast(value) {
  //   if (this.weatherData !== undefined){
  //     let txtForecast = this.weatherData.forecast.txt_forecast.forecastday
  //   }
  //   return txtForecast;
  // }
  // simpleForecast() {
  //   if (this.weatherData !== undefined){
  //     let simpleForecast = this.weatherData.forecast.simpleforecast.forecastday
  //   }
  //   return simpleForecast;
  // }
  // This allows for clean scoping of all the data in the current_observation object. A lot less of a mess than a long call in the template.
  // conditions() {
  //   if (this.weatherData){
  //     let conditions = this.weatherData.current_observation
  //   }
  //   return conditions;
  // }
}
