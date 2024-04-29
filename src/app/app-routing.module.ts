import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouComponent } from './carou/carou.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { ToilettehommesComponent } from './toilettehommes/toilettehommes.component';
import { SerumAntiAgeVisageComponent } from './serum-anti-age-visage/serum-anti-age-visage.component';
import { NettoyantsComponent } from './nettoyants/nettoyants.component';
import { EauhommeComponent } from './eauhomme/eauhomme.component';
const routes: Routes = [
  {path: 'carou', component:CarouComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'parfum-eau', component:ParfumEauComponent},
  {path: 'toillet-parfum', component:ToilletParfumComponent}, 
   {path: 'navbar', component:NavbarComponent}, 
    {path: 'inscription', component:InscriptionComponent},
    {path: 'rouge', component:RougeComponent},
    {path: 'mascar', component:MascaraComponent},
    {path: 'creme-visage', component:CremeVisageComponent},
    {path: 'contenu', component:ContenuComponent},  
    {path: 'gel-nettoyant', component:GelNettoyantComponent},
    {path: 'huile-solaire', component:HuileSolaireComponent},
    {path: 'ecron-solaire', component:EcronSolaireComponent},
    {path: 'promotion', component:PromotionComponent},
  
    {path: 'login', component:LoginComponent},
    {path: 'crayon', component:CrayonComponent},
    {path: 'gloss', component:GlossComponent},
    {path: 'ecran-solaire-visible', component:EcranSolaireVisibleComponent},
    {path: 'spray-solaire', component:SpraySolaireComponent},
    
   
    {path: 'toilettehommes', component:ToilettehommesComponent},
    {path: 'serum-anti-age-visage', component:SerumAntiAgeVisageComponent},
    {path: 'nettoyants', component:NettoyantsComponent},
    {path: 'eauhomme', component:EauhommeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
