import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LiveVideoPlayerComponent } from './live-video-player/live-video-player.component';
import { ReplayMenuListComponent } from './replay-menu-list/replay-menu-list.component';
import { ReplayDataListComponent } from './replay-data-list/replay-data-list.component';
import { ReplayMenu } from 'src/app/shared/models/replay';
import { Observable } from 'rxjs';
import { ReplayService } from 'src/app/shared/services/replay/replay.service';
import { AsyncPipe } from '@angular/common';
import { AmbassadorBannerComponent } from 'src/app/shared/components/ambassador-banner/ambassador-banner.component';
import { AmbassadorBanner } from 'src/app/shared/models/ambassador-banner';

@Component({
  selector: 'app-live-container',
  standalone: true,
  imports: [
    AsyncPipe,
    LiveVideoPlayerComponent,
    ReplayMenuListComponent,
    ReplayDataListComponent,
    AmbassadorBannerComponent
  ],
  templateUrl: './live-container.component.html',
  styleUrls: ['./live-container.component.scss']
})
export class LiveContainerComponent implements OnInit{

  liveStreamingLink = environment.liveStreaming;
  menusList$ !: Observable<ReplayMenu[]>;
  replayDataList$ !:Observable<any>
  ambassadorBanner !: AmbassadorBanner;

  constructor(
    private replayService : ReplayService
  ){}

  ngOnInit(): void {
      this.getMenuList();
      this.initAmbassadorBanner();

  }

  getMenuList() : void{
    this.menusList$ = this.replayService.getMenuList();
  }

  getReplayDataListByReplayCategoryId($event : string) : void{
    const id = $event;
    
  }

  initAmbassadorBanner() : void {
    this.ambassadorBanner = {
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit ipsum ex at doloremque saepe soluta repellat rerum nisi incidunt quo.",
      image : "../../../../assets/img/home/main-hero/senegal.png",
      alt : ''
    }
  }

}
