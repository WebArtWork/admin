import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunnersComponent } from './runners.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
	path: '',
	component: RunnersComponent
}, {
	path: '_id',
	component: RunnersComponent
}];

@NgModule({
	declarations: [RunnersComponent],
	imports: [
		RouterModule.forChild(routes),
		FormsModule,
		CommonModule
	]
})
export class RunnersModule { }
