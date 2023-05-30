import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HouseComponent } from './house/house.component';
import { HousesComponent } from './houses/houses.component';
import { WandsComponent } from './components/wands/wands.component';
import { BookComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { SpeciesComponent } from './species/species.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    HousesComponent,
    WandsComponent,
    BookComponent,
    CharactersComponent,
    SpeciesComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
