import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsComponent } from './parts.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
	path: '',
	component: PartsComponent
}, {
	path: '_id',
	component: PartsComponent
}];

@NgModule({
	declarations: [PartsComponent],
	imports: [
		RouterModule.forChild(routes),
		FormsModule,
		CommonModule
	]
})
export class PartsModule { }
