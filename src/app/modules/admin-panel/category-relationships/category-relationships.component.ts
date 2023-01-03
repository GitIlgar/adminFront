import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-relationships',
  templateUrl: './category-relationships.component.html',
  styleUrls: ['./category-relationships.component.sass']
})
export class CategoryRelationshipsComponent implements OnInit {
  relationshipsForm!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.relationshipsForm = new FormGroup({
      'parent': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'child': new FormControl('', [Validators.required, Validators.minLength(1)])
    })
  }
  relationships(): void {
    
  }
}
