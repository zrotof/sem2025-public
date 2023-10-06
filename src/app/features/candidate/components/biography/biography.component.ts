import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [
    NgFor,
    NgClass
  ],
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent {

  biographyBlocs = [
    {
      title:"Jeunesse Et Formation",
      sourceImg: "../../../../../assets/img/Candidate/formation.jpeg",
      altImg:"",
      texts : [
        {text : "Après un baccalauréat technique de gestion en 1980, il obtient une maîtrise en sciences économiques, option gestion des Entreprises, ainsi qu’un brevet de l’ENAM en 1988, section Impôts et Domaines. Il travaille en tant qu’inspecteur stagiaire à Diourbel en 1989, puis devient inspecteur chef du premier secteur de taxe sur la valeur ajoutée à la Direction générale des impôts et domaines (DGID) à Dakar. En 1991, il se perfectionne par deux stages, à l’Institut international d’administration publique de Paris et à Baltimore."},
        {text : "De 1990 à 1992, il est chef d’inspection à Dakar Plateau I, puis il est délégué dans les fonctions de commissaire contrôleur des assurances à la direction des assurances jusqu’en 1994. Ensuite, il travaille en tant qu’inspecteur vérificateur à la direction des vérifications et enquêtes fiscales."},
        {text : "Après un stage de formation à l’École nationale des impôts de Clermont-Ferrand durant l’été 2001, il prend en 2002 la tête du Centre des grandes entreprises de la direction des impôts, puis devient directeur des impôts en 2004 pour un an. En novembre 2006, il est nommé directeur général des impôts et des domaines. Sous sa direction est mis en œuvre un nouveau Code général des impôts, entré en vigueur en janvier 2013."}
      ]
    },
    {
      title:"Ministre, Premier Ministre",
      sourceImg: "../../../../../assets/img/Candidate/travail.webp",
      altImg:"",
      texts : [
        {text : "Lors de la formation du gouvernement Touré, le 2 septembre 2013, il est nommé ministre de l’Économie et des Finances2, en remplacement d’Amadou Kane. Entre 2019 et 2020, il est ministre des Affaires étrangères, sous la présidence de Macky Sall."},
        {text : "À l’issue des élections législatives de 2022, Amadou Ba est élu député de la XIVe législature, sur la liste de la coalition présidentielle d’Unis par l’espoir (BBY)4. Le 17 septembre 2022, Amadou Ba est nommé Premier ministre, l’obligeant a démissionner de son mandat de député ; il est remplacé par le suivant sur la liste, le jeune Abdoulaye Diagne4,5. Le 9 septembre 2023, il est choisi par le Président Macky Sall pour être candidat de la coalition Benno Bokk Yakaar (BBY) pour l’élection présidentielle de 2024."},
      ]
    },
    {
      title:"Vie privée",
      sourceImg: "../../../../../assets/img/Candidate/famille.jpeg",
      altImg:"",
      texts : [
        {text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptas officia vero beatae illo qui sunt voluptatibus in quasi quaerat nisi, cumque odit pariatur dolores minima vitae! Similique, facilis vitae."},
        {text : "De 1990 à 1992, il est chef d’inspection à Dakar Plateau I, puis il est délégué dans les fonctions de commissaire contrôleur des assurances à la direction des assurances jusqu’en 1994. Ensuite, il travaille en tant qu’inspecteur vérificateur à la direction des vérifications et enquêtes fiscales."},
      ]
    }
  ]
}
