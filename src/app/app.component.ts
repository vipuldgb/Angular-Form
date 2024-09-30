import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'forms';
  reactiveForm:FormGroup;
  formData:any[] =[];

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      lastname: new FormControl(null,[Validators.required,Validators.minLength(2)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      username:new FormControl(null,[Validators.required,Validators.minLength(4)]),
      dob:new FormControl(null,Validators.required),
      gender:new FormControl(null)
    })
  };

  get f()
  {
         return this.reactiveForm.controls;
  }
  
  OnFormSubmitted(){
   
    if(this.reactiveForm.valid)
    {
      this.formData.push(this.reactiveForm.value)
      this.reactiveForm.reset()
    }
    else
    {
      console.log("Form Is Invalid!!")
    }
   
    
  }

 

}
