import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Network } from 'src/app/shared/models/network';

@Component({
  selector: 'app-about-candidate',
  standalone: true,
  imports: [
    NgFor,
    RouterLink
  ],
  templateUrl: './about-candidate.component.html',
  styleUrls: ['./about-candidate.component.scss']
})

export class AboutCandidateComponent implements OnInit {

  networks !: Network[];

  ngOnInit(): void {
      this.initNetworks();
  }

  initNetworks(){
    this.networks = [
      {
        sourceImg : "../../../assets/img/social-medias/facebook.png",
        link : "",
        name : "facebook"
      },
      {
        sourceImg : "../../../assets/img/social-medias/instagram.png",
        link : "",
        name : "instagram"
      },
      {
        sourceImg : "../../../assets/img/social-medias/tik-tok.png",
        link : "",
        name : "tik tok"
      }
    ]
  }

}
