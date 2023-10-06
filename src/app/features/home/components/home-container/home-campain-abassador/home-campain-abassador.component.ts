import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-campain-abassador',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './home-campain-abassador.component.html',
  styleUrls: ['./home-campain-abassador.component.scss']
})
export class HomeCampainAbassadorComponent implements OnInit {

  camPainAmbassadorForm !: FormGroup;
  isFormSubmitted = false;

  constructor(
    private fb : FormBuilder
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
    this.camPainAmbassadorForm = this.fb.group({
      lastname: ["", Validators.required],
      firstname: ["", Validators.required],
      email: ["", Validators.required],
      ville: ['']
    })
  }

  get formControls(){
    return this.camPainAmbassadorForm.controls;
  }

  onCampainAmbassadorForm() : void{

    this.isFormSubmitted = true

    if(this.camPainAmbassadorForm.invalid){
      return;
    }

  }
}
