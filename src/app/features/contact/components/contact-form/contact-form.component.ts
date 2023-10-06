import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm !: FormGroup;
  isFormSubmitted = false;

  socialMediaList : any;
  contactWays : any;

  constructor(
    private fb : FormBuilder
  ){}

  ngOnInit(): void {
    this.initForm();
    this.initSocialMedias();
    this.initContactWays();
  }

  initForm():void{
    this.contactForm = this.fb.group({
      lastname: ["", Validators.required],
      firstname: ["", Validators.required],
      email: ["", Validators.required],
      town: [''],
      object: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(20)]],
    })
  }

  get formControls(){
    return this.contactForm.controls;
  }

  onContactForm(){

    this.isFormSubmitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
  }

  initSocialMedias(){
    this.socialMediaList = [
      {
        source : "../../../../assets/img/social-medias/facebook.png",
        alt :"Suivez Amore Mio sur facebook",
        link : ""
      },
      {
        source : "../../../../assets/img/social-medias/instagram.png",
        alt :"Suivez Amore Mio sur instagram",
        link : ""
      },
      {
        source : "../../../../assets/img/social-medias/tik-tok.png",
        alt :"Suivez Amore Mio sur tik-tok",
        link : ""
      },
      {
        source : "../../../../assets/img/social-medias/twitter.png",
        alt :"Suivez Amore Mio sur tik-tok",
        link : ""
      }
    ]
  }


  initContactWays(){
    this.contactWays = [
      {
        icon: "faPhone",
        label: "Téléphone",
        info: "+221-78-45-76-90"
      },
      {
        icon: "faEnvelope",
        label: "Mail",
        info: "contact@amadou-ba.sn"
      }
    ]
  }
}
