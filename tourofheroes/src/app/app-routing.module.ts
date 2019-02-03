import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomePage } from './pages/home/home.page';
import { ListPage } from './pages/list/list.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'home', component: HomePage },
	{ path: 'list', component: ListPage },
	{ path: 'dashboard', component: DashboardPage }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	private MODULE = "AppRoutingModule";

	constructor() {
		console.log(this.MODULE + '::constructor | ');
	}
}
