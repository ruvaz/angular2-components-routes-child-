import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="jumbotron">
      <h1 class="display-3" appResaltado>Demos <small>angular</small></h1>
    </div>
    <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <hr>
    <app-clases></app-clases>
    <hr>
    <p [appResaltado]="'blue'">
      Hola mundo desde app.component
    </p>
    <hr>
    <app-ng-switch></app-ng-switch>
    <hr>
    <p>
      home works!
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  // Los mas usados son
  // constructor
  // OnChanges
  // OnInit
  // OnDestroy

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('constructor');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


}
