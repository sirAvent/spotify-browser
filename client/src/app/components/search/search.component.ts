import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    //DONE: call search function in spotifyService and parse response
    if (this.searchString) {
      this.resources = null;
      this.spotifyService.searchFor(this.searchCategory, this.searchString)
      .then((resources: ResourceData[]) => {
        this.resources = resources;
      });
    }
  }

  onSelectChange(): void {
    if (this.searchString) {
      this.search();
    }
  }

  onEnterKeydown(): void {
    this.search();
  }
}
