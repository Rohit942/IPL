import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CurrentnatchesComponent } from './currentnatches/currentnatches.component';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import { CricketnewsComponent } from './cricketnews/cricketnews.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerprofileComponent } from './playerprofile/playerprofile.component';
import { MumbaiindiansComponent } from './mumbaiindians/mumbaiindians.component';
import { RajasthanroyalsComponent } from './rajasthanroyals/rajasthanroyals.component';
import { ChennaisuperkingsComponent } from './chennaisuperkings/chennaisuperkings.component';
import { DelhicapitalsComponent } from './delhicapitals/delhicapitals.component';
import { KingsXIpunjabComponent } from './kings-xipunjab/kings-xipunjab.component';
import { KolkataknightridersComponent } from './kolkataknightriders/kolkataknightriders.component';
import { RoyalchallengersbangaloreComponent } from './royalchallengersbangalore/royalchallengersbangalore.component';
import { SunrisershyderabadComponent } from './sunrisershyderabad/sunrisershyderabad.component';
import {HttpClientModule} from '@angular/common/http';
import { PlayersService } from './services/players.service';
import { GalleryComponent } from './gallery/gallery.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,   
    CurrentnatchesComponent,
    PlayerstatisticsComponent,
    CricketnewsComponent,
    CarouselComponent,
    FooterComponent,
   
    PlayerprofileComponent,
    MumbaiindiansComponent,
    RajasthanroyalsComponent,
    ChennaisuperkingsComponent,
    DelhicapitalsComponent,
    KingsXIpunjabComponent,
    KolkataknightridersComponent,
    RoyalchallengersbangaloreComponent,
    SunrisershyderabadComponent,
    GalleryComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
