import { Component, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'audio-player';
   // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent, {static: false}) plyr: PlyrComponent;

  // or get it from plyrInit event
  player;

  videoSources = [
    {
      src: 'bTqVqk7FSmY',
      provider: 'youtube',
    },
  ];

  played(event) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }
}
