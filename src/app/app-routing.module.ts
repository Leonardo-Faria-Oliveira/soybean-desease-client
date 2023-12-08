import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { FormComponent } from './form/form.component';
import { SelectedCaseComponent } from './selected-case/selected-case.component';

export const routes: Routes = [
  {path:'', component: FormComponent},
  {path:'form', component: FormComponent},
  {path:'cases/compair/:id', component: CasesComponent},
  {path:'cases/compair/:id/:name', component: SelectedCaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
