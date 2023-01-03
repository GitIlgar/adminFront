import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.sass']
})
export class AutoComponent implements OnInit {

  autoForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.autoForm = new FormGroup({
      'brand': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'model': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'generation': new FormControl('', [Validators.required, Validators.minLength(1)])
    })
  }

  submitAuto() {
    console.log(this.autoForm.value.brand)
  }

}
