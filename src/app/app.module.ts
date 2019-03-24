import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatLabel, MatSelectModule} from '@angular/material';
import { MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { PromoComponent } from './promo/promo.component';
import { MenuComponent } from './menu/menu.component';
import { FlashComponent } from './flash/flash.component';
import { KategoriComponent } from './kategori/kategori.component';
import { ProdukComponent } from './produk/produk.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PromoComponent,
    MenuComponent,
    FlashComponent,
    KategoriComponent,
    ProdukComponent
  ],
  imports: [
    CountdownTimerModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
