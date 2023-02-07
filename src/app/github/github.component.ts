import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  clipboardCheckedVisible = false;
  clipboardVisible = true;
  message = new FormControl('git clone https://github.com/fe-ktch/Angular-BMICalculator.git');

  constructor() { }

  ngOnInit(): void {
  }
  copyMessage(val: string){

    
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.clipboardCheckedVisible = true;
    this.clipboardVisible = false;

    this.message.setValue("Copied!");
  }
}
