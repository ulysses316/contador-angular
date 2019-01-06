import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numero',
  template: '{{numeroPadre}}'
})
export class NumeroComponent{

  @Input() numeroPadre: number;

  constructor() {}

}
