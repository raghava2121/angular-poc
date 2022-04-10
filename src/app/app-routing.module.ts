import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesContainerComponent } from './countries-container/countries-container.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'region', pathMatch: 'full'
  },
  {
    path: '**', component: CountriesContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
