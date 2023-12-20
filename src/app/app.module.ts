import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule, BrowserModule, FontAwesomeModule, AppComponent, FormsModule, ReactiveFormsModule, FormComponent
  ]
})
export class AppModule {
}
