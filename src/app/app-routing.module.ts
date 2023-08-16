import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { BlablaComponent } from './blabla/blabla.component';


const routes: Routes = [

	{ path: '', redirectTo: 'app-blabla', pathMatch: 'full' },
	{ path: '**', component: BlablaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
