import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCompanySheetComponent } from './all-company-sheet/all-company-sheet.component';
import { CompanySheetComponent } from './company-sheet/company-sheet.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'companySheet', component:CompanySheetComponent},
  {path:'allCompanySheet', component:AllCompanySheetComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
