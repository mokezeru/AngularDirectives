import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MynewcolorDirective } from './mynewcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MyvisibilityDirective,
    MynewcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
