import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormControl , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases/cases.component';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { SelectedCaseComponent } from './selected-case/selected-case.component';
import { AcceptModalComponent } from './accept-modal/accept-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CasesComponent,
    SelectedCaseComponent,
    AcceptModalComponent,
    ErrorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
