import { Component, trigger, state, style, animate, transition } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'weather-app',
  template: `
    <nav class="navbar">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['']">Home</a></li>
          <li><a [routerLink]="['/weather']">Weather</a></li>
        </ul>
        <div class="navbar-form navbar-right" role="search">
          <div class="input-group">
            <input
              class="form-control"
              placeholder="Zip"
              type="text"
               />
            <span class="input-group-btn">
              <button
                type='button'
                class="btn btn-info"
                onClick={props.onSubmitCity}>
                Get Weather
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>

    <main><router-outlet></router-outlet></main>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {

}
