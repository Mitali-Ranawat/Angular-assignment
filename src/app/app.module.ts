import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './apidata.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule } from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DataComponent,
    UserFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    NgxPaginationModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
