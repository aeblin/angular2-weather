import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { WeatherData }    from './weatherData';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class WeatherDataService {
  constructor(private http: Http) {}

  // private dataUrl = 'app/weather/forecasts-current-api.json'; // Mock Data - save yourself some API calls.
  private dataUrl = 'http://api.wunderground.com/api/8e65e73be0457340/forecast/conditions/q/CA/94129.json'

  // Prep for move to input, away from hardcoded zip code
  private baseUrl = 'http://api.wunderground.com/api/'
  private apiKey = '8e65e73be0457340'
  private dataRequests = '/forecast/conditions/q/CA/'
  private zip = '94122'

  getWeather() {
    return this.http.get(this.dataUrl)
    // return this.http.get(this.baseUrl + this.apiKey + this.dataRequests + '20171' + '.json')
           .map(this.extractData)
           .catch(this.handleError)
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}