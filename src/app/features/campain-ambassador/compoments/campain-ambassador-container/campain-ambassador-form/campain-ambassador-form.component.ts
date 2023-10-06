import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-campain-ambassador-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './campain-ambassador-form.component.html',
  styleUrls: ['./campain-ambassador-form.component.scss']
})
export class CampainAmbassadorFormComponent implements OnInit {

  campainAmbassadorForm !: FormGroup;
  isFormSubmitted = false;

  constructor(
    private fb : FormBuilder
  ){}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
    this.campainAmbassadorForm = this.fb.group({
      lastname: ["", Validators.required],
      firstname: ["", Validators.required],
      email: ["", Validators.required],
      town: ['']
    })
  }

  get formControls(){
    return this.campainAmbassadorForm.controls;
  }

  onCampainAmbassadorForm() : void{

    this.isFormSubmitted = true;

    if(this.campainAmbassadorForm.invalid){
      console.log(this.campainAmbassadorForm.invalid)
      return;
    }

    this.isFormSubmitted = false;

  }
}
