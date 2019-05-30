import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from './database.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
	path: '',
	component: DatabaseComponent
}, {
	path: '_id',
	component: DatabaseComponent
}];

@NgModule({
	declarations: [DatabaseComponent],
	imports: [
		RouterModule.forChild(routes),
		FormsModule,
		CommonModule
	]
})
export class DatabaseModule { }
