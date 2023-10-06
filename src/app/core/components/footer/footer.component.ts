import { Component } from '@angular/core';
import { Network } from 'src/app/shared/models/network';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  networks : Network[] = [
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

  apps : Network[] = [
    {
      sourceImg : "../../../assets/img/apps/app-store.webp",
      link : "",
      name : "App store"
    },
    {
      sourceImg : "../../../assets/img/apps/play-store.webp",
      link : "",
      name : "Play store"
    }
  ]

  actLinks = [
    {
      label : "Nous contacter",
      link : "/contact"
    },
    {
      label : "Ambassadeur de campagne",
      link : "/devenir-ambassadeur-de-campagne"
    },
    {
      label : "Faire un don",
      link : "/dons"
    }
  ]

  informLinks = [
    {
      label : "Accueil",
      link : ""
    },
    {
      label : "Agenda",
      link : "/agenda"
    },
    {
      label : "Dernières actualités",
      link : "/articles"
    },
    {
      label : "Le candidat",
      link : "/le-candidat"
    },
    {
      label : "Le programme",
      link : "/le-programme"
    },
    {
      label : "Streaming",
      link : "/lives"
    }
  ]
}
