import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./page/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {PorfolioComponent} from "./page/porfolio/porfolio.component";
import {ContactsComponent} from "./page/contacts/contacts.component";
import {GalleryComponent} from "./page/gallery/gallery.component";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes  = [
  {
    path: "webhome", component: HomeComponent,
    children: [
      {path: "home", component: HomeComponent},
      {path: "porfolio", component: PorfolioComponent},
      {path: "contacts", component: ContactsComponent},
      {path: "gallery", component: GalleryComponent},
    ]
  },
  { path: "**", redirectTo: "home"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PorfolioComponent,
    ContactsComponent,
    GalleryComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

