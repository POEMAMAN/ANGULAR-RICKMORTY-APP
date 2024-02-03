import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './domains/components/characters/characters.component';
import { CharacterspageComponent } from './domains/pages/characterspage/characterspage.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
