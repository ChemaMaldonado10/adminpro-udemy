import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() percentage: number = 50;
  @Input() legend: string = 'Legend';

  @Output() valuehaschanged: EventEmitter<number>= new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChange( newValue : number ) {

    // let elemHTML = document.getElementsByName('percentage')[0];

    console.log( newValue );
    if ( newValue >= 100) {
      this.percentage = 100;
    } else if ( newValue <= 0) {
      this.percentage = 0;
    } else{
    this.percentage = newValue;
    }
    // elemHTML.value =  this.percentage;
    this.txtProgress.nativeElement.value= this.percentage;
    this.valuehaschanged.emit(this.percentage);

  }

  changeValue( value: number ) {
    if ( this.percentage >= 100 ) {
      this.percentage = 100;
    }
    if ( this.percentage <= 0 ) {
      this.percentage = 0;
    }
    this.percentage = this.percentage + value;
    this.valuehaschanged.emit(this.percentage);
    this.txtProgress.nativeElement.focus();
  }
}
