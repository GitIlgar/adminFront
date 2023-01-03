import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
interface TestInterface{
  name: string 
}
@Component({
  selector: 'app-spares-category',
  templateUrl: './spares-category.component.html',
  styleUrls: ['./spares-category.component.sass']
})

export class SparesCategoryComponent implements OnInit {

  sparesForm!: FormGroup
  env = environment

  constructor( private http: HttpClient ) { }
  
  ngOnInit(): void {
    this.sparesForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(1)])
    })
  }

  submitSpares() {
    this.http.post<TestInterface>( this.env.partsApiUrl + "/categories",
      {"name": this.sparesForm.value.name},
      {
        withCredentials: true,
      }
    ).subscribe({
      next: (res) =>{
        console.log(this.sparesForm.value.name)
      },
      complete: () => {
        console.log(this.sparesForm.value.name)
      }
    })
    // console.log(this.sparesForm.value.name)
  }

}
