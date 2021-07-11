import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import forms
import { ReactiveFormsModule } from '@angular/forms';
// import the http loader
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from './httpTranslateLoader';
// import apollo
import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import ng bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DeleteComponent } from './components/modals/delete/delete.component';
import { CreateUpdateDutyComponent } from './components/modals/create-update-duty/create-update-duty.component';
import { ShowDutyComponent } from './components/modals/show-duty/show-duty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DeleteComponent,
    CreateUpdateDutyComponent,
    ShowDutyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    GraphQLModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteComponent,
    CreateUpdateDutyComponent,
    ShowDutyComponent
  ]
})
export class AppModule { }
