import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'boxicons'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouComponent } from './carou/carou.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { ParfumEauComponent } from './parfum-eau/parfum-eau.component';
import { ToilletParfumComponent } from './toillet-parfum/toillet-parfum.component';
import { RougeComponent } from './rouge/rouge.component';
import { MascaraComponent } from './mascara/mascara.component';
import { EcronSolaireComponent } from './ecron-solaire/ecron-solaire.component';
import { HuileSolaireComponent } from './huile-solaire/huile-solaire.component';
import { GelNettoyantComponent } from './gel-nettoyant/gel-nettoyant.component';
import { CremeVisageComponent } from './creme-visage/creme-visage.component';
import { ContenuComponent } from './contenu/contenu.component';
import { PromotionComponent } from './promotion/promotion.component';
import { LoginComponent } from './login/login.component';
import { CrayonComponent } from './crayon/crayon.component';

import { GlossComponent } from './gloss/gloss.component';
import { EcranSolaireVisibleComponent } from './ecran-solaire-visible/ecran-solaire-visible.component';
import { SpraySolaireComponent } from './spray-solaire/spray-solaire.component';

import { SerumAntiAgeVisageComponent } from './serum-anti-age-visage/serum-anti-age-visage.component';
import { NettoyantsComponent } from './nettoyants/nettoyants.component';
import { EauhommeComponent } from './eauhomme/eauhomme.component';
import { ToilettehommesComponent } from './toilettehommes/toilettehommes.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouComponent,
    FooterComponent,
    NavbarComponent,
    InscriptionComponent,
    ParfumEauComponent,
    ToilletParfumComponent,
    RougeComponent,
    MascaraComponent,
    EcronSolaireComponent,
    HuileSolaireComponent,
    GelNettoyantComponent,
    CremeVisageComponent,
    ContenuComponent,
    PromotionComponent,
    LoginComponent,
    CrayonComponent,
    SerumAntiAgeVisageComponent,
    NettoyantsComponent,
    GlossComponent,
    ToilletParfumComponent,
    EauhommeComponent,
    ToilettehommesComponent,
  
    EcranSolaireVisibleComponent,
    SpraySolaireComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

   

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
