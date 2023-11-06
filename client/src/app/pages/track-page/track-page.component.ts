import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { TrackFeature } from '../../data/track-feature';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
	trackId:string;
	track:TrackData;
  audioFeatures:TrackFeature[];

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
  	this.trackId = this.route.snapshot.paramMap.get('id');
  	//DONE: Inject the spotifyService and use it to get the track data and it's audio features
    this.trackId = this.route.snapshot.paramMap.get("id");

    this.spotifyService.getTrack(this.trackId)
    .then((track: TrackData) => {
      this.track = track;
    });

    this.spotifyService.getAudioFeaturesForTrack(this.trackId)
    .then((audioFeatures: TrackFeature[]) => {
      this.audioFeatures = audioFeatures.filter(feature => TrackFeature.FeatureTypes.includes(feature.name));
      for (let feature of this.audioFeatures) {
        feature.id = this.trackId;
      }
    });
  }
}
