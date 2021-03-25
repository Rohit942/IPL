import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentnatchesComponent } from './currentnatches/currentnatches.component';
import { CricketnewsComponent } from './cricketnews/cricketnews.component';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlayerprofileComponent } from './playerprofile/playerprofile.component';
import { MumbaiindiansComponent } from './mumbaiindians/mumbaiindians.component';
import { RajasthanroyalsComponent } from './rajasthanroyals/rajasthanroyals.component';
import { ChennaisuperkingsComponent } from './chennaisuperkings/chennaisuperkings.component';
import { DelhicapitalsComponent } from './delhicapitals/delhicapitals.component';
import { KingsXIpunjabComponent } from './kings-xipunjab/kings-xipunjab.component';
import { KolkataknightridersComponent } from './kolkataknightriders/kolkataknightriders.component';
import { RoyalchallengersbangaloreComponent } from './royalchallengersbangalore/royalchallengersbangalore.component';
import { SunrisershyderabadComponent } from './sunrisershyderabad/sunrisershyderabad.component';
import { GalleryComponent } from './gallery/gallery.component';
const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'currentnatches', component: CurrentnatchesComponent },
  { path: 'cricketnews', component: CricketnewsComponent },
  { path: 'playerstatistics', component: PlayerstatisticsComponent },
  { path: 'playerprofile', component: PlayerprofileComponent },
  { path: 'mumbaiindians', component: MumbaiindiansComponent },
  { path: 'rajasthanroyals', component: RajasthanroyalsComponent },
  { path: 'chennaisuperkings', component: ChennaisuperkingsComponent },
  { path: 'delhicapitals', component: DelhicapitalsComponent },
  { path: 'kings-xipunjab', component: KingsXIpunjabComponent },
  { path: 'kolkataknightriders', component: KolkataknightridersComponent },
  { path: 'royalchallengersbangalore', component: RoyalchallengersbangaloreComponent },
  { path: 'sunrisershyderabad', component: SunrisershyderabadComponent },
  { path: 'gallery', component: GalleryComponent },
  
  { path: '' , redirectTo: '/carousel', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
