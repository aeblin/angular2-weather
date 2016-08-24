import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  keyframes,
  animate } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: "home",
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1>Hi, Swirl.</h1>
        </div>
      </div>
    </div>
   `,
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

export class HomeComponent {}