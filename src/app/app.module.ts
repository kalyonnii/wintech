import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
        MenubarModule,
    ButtonModule,
    MenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
