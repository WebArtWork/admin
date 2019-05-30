import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const routes: Routes = [{
	path: '',
	loadChildren: './pages/dash/dash.module#DashModule'
}, {
	path: 'Runners',
	loadChildren: './pages/runners/runners.module#RunnersModule'
}, {
	path: 'Parts',
	loadChildren: './pages/parts/parts.module#PartsModule'
}, {
	path: 'Cloud',
	loadChildren: './pages/cloud/cloud.module#CloudModule'
}, {
	path: 'Database',
	loadChildren: './pages/database/database.module#DatabaseModule'
}];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(routes),
		HttpClientModule,
		BrowserModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
