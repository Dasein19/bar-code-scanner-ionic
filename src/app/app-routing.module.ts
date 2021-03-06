import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: './modules/home/home.module#HomePageModule' },
	{
		path: 'home/barcode-result',
		loadChildren: './modules/home/pages/barcode/barcode-result/barcode-result.module#BarcodeResultPageModule',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
