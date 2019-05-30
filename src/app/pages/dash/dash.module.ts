import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
	path: '',
	component: DashComponent
}];

@NgModule({
	declarations: [DashComponent],
	imports: [
		RouterModule.forChild(routes),
		FormsModule,
		CommonModule
	]
})
export class DashModule { }
