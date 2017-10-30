import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {ImageComponent} from "./image/image.component";
import {FormSearchComponent} from "./form-search/form-search.component";
import {ButtonsComponent} from "./buttons/buttons.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageComponent,
    FormSearchComponent,
    ButtonsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
