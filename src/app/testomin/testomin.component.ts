import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-testomin',
  templateUrl: './testomin.component.html',
  styleUrls: ['./testomin.component.scss']
})
export class TestominComponent implements OnInit {

  weight = new FormControl('');
  height = new FormControl('');
  bmi = new FormControl('');

  bmiVisible = false;
  message = false;

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(event:any) {
    if (event.key == "Enter") {
      this.onEnterHandler();
    }
  }

  onEnterHandler() {
    this.startCalculations();
  }

  startCalculations() {
    let weight = Number(this.weight.value);
    let height = Number(this.height.value);
    let bmi = this.calcBMI(weight, height);
    this.bmi.setValue(String(bmi));
    this.bmiVisible = true;
    this.message = true;
  }

  calcBMI(weight : number, height : number) {
    let result = weight / Math.pow(height, 2) * 1000;
    return result.toFixed(2);
  }

  onClickCalcButton() {
    this.startCalculations();
  }
}
