import { Component, ViewChild, OnInit } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import Plyr from 'plyr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  track;
  options = {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']
  };
  ngOnInit() {
    this.setCurrentTrack(0);
  }

  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent, {static: true})
  plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  played(event: Plyr.PlyrEvent) {
    //console.log('played', event);
  }

  /* 
   * When the current track ends, check to see if there is another 
   * track and if there is, play it. Otherwise, play the first track.
  */
  ended(event: Plyr.PlyrEvent, track) {
    //console.log('ended', event);
    let trackId = track.trackId;
    let nextTrackId = 0;
    
    if (trackId < this.tracks.length - 1) {
      nextTrackId = ++trackId;
    }

    this.play(nextTrackId);
  }

  ready(event: Plyr.PlyrEvent, track) {
    //console.log('ready', event);
    //console.log(source)
  }

  playing(event: Plyr.PlyrEvent, track) {
    console.log(this.player);
    //console.log('ready', event);
    //console.log(source)
  }

  setCurrentTrack(trackId) {
    this.track = {
      ...this.tracks[trackId],
      trackId: trackId
    };
  }

  getCurrentTrack() {
    return this.track;
  }

  getCurrentTrackId() {
    return this.getCurrentTrack().trackId;
  }

  pause(): void {
    this.player.pause();
  }

  async play(trackId): Promise<any> {
    this.setCurrentTrack(trackId);
    await this.delay(1);
    this.player.play();
  }

  stop(): void {
    this.player.stop();
  }

  tracks = [
    {
      title: 'Inspiration',
      release: new Date(),
      artist: 'Rafael Krux',
      src: '/assets/inspiration__rafael_krux.mp3',
      type: 'audio/mp3',
      duration: '2:18',
    },
    {
      title: 'Favorite',
      release: new Date(),
      artist: 'Alexander Nakarada',
      src: '/assets/favorite__alexander_nakarada.mp3',
      type: 'audio/mp3',
      duration: '2:54',
    },
    {
      title: 'Epic Boss Battle',
      release: new Date(),
      artist: 'Rafael Krux',
      src: '/assets/epic_boss_battle__rafael_krux.mp3',
      type: 'audio/mp3',
      duration: '2:50',
    },
  ];
}
