import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudComponent } from './cloud.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
	path: '',
	component: CloudComponent
}, {
	path: '_id',
	component: CloudComponent
}];

@NgModule({
	declarations: [CloudComponent],
	imports: [
		RouterModule.forChild(routes),
		FormsModule,
		CommonModule
	]
})
export class CloudModule { }
