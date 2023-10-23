import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';
import { AgendaMenuItemsComponent } from './agenda-menu-items/agenda-menu-items.component';
import { AgendaDataNextComponent } from './agenda-data-next/agenda-data-next.component';
import { AgendaDataListComponent } from './agenda-data-list/agenda-data-list.component';
import { AsyncPipe } from '@angular/common';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { AgendaService } from 'src/app/shared/services/agenda/agenda.service';
import { Event } from 'src/app/shared/models/Agenda';

@Component({
  selector: 'app-agenda-container',
  templateUrl: './agenda-container.component.html',
  styleUrls: ['./agenda-container.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    SecondaryHeroComponent,
    AgendaMenuItemsComponent,
    AgendaDataNextComponent,
    AgendaDataListComponent
  ]
})
export class AgendaContainerComponent implements OnInit {

  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;
  menus$ !: Observable<any>;
  nextEvents$ !: Observable<Event[]>;
  eventsByEventTypes$ !: Observable<Event[]>;
  heroBannerId: string = "agenda";

  constructor(
    private heroService : HeroBannerService,
    private agendaService : AgendaService
  ){}

  ngOnInit(): void {
    this.getSencondaryHeroBannerData(this.heroBannerId);
    this.getAgendaMenuList();
    this.getNextEvents();
  }

  getSencondaryHeroBannerData(id : string) : void {
    this.secondaryHeroBannerData$ = this.heroService.getSecondaryHeroData(id);
  }

  getAgendaMenuList() : void {
    this.menus$ = this.agendaService.getAgendaEventTypeList();
  }

  getNextEvents() : void {
    const date = Date.now();
    const queryParams = `limit=4&date=${date}`;
    this.nextEvents$ = this.agendaService.getEvents(queryParams);
  }

  getEventsByEventTypeId($event : string) : void {
    const eventTypeId = $event;
    const queryParams = `eventTypeId=${eventTypeId}`;
    this.eventsByEventTypes$ = this.agendaService.getEvents(queryParams);
  }
}
