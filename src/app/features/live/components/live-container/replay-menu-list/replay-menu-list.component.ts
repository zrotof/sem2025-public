import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplayMenu } from 'src/app/shared/models/replay';

@Component({
  selector: 'app-replay-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './replay-menu-list.component.html',
  styleUrls: ['./replay-menu-list.component.scss']
})
export class ReplayMenuListComponent implements OnChanges {

  @Input() replayMenuList !: ReplayMenu[];
  @Output() replayMenuItemClikedEvent = new EventEmitter<string>();

  private isFirstChange = true;

  setActiveMenu( index : number){
    this.replayMenuList.forEach(menu => menu.state = false );
    this.replayMenuList[index].state = true;
  }
  getReplayListByReplayCategoryId(id : string, index: number){
    if(this.replayMenuList[index].state === false){
      this.setActiveMenu(index);
      this.replayMenuItemClikedEvent.emit(id);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['replayMenuList'].currentValue && this.isFirstChange){
        this.getReplayListByReplayCategoryId(this.replayMenuList[0].id, 0);
        this.isFirstChange = false;
    }
  }
}
