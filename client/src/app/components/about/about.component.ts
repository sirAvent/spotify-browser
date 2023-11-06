import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { ProfileData } from "../../data/profile-data";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;

  //DONE: inject the Spotify service
  constructor(private spotifyService: SpotifyService) {}


  ngOnInit() {
  }

  /*DONE: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  getAboutMeInfo(): void {
    this.spotifyService.aboutMe().then((profileData: ProfileData): void => {
      this.name = profileData.name;
      this.profile_pic = profileData.imageURL;
      this.profile_link = profileData.spotifyProfile;
    });
  }

}
