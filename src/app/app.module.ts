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

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    HousesComponent,
    WandsComponent,
    BookComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
