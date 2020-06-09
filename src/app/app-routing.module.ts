import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'table', component: PatientTableComponent},
  { path: 'questionnaire', component: QuestionnaireComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }