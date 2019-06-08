import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BarcodeResultPage } from './barcode-result.page';
import { SharedModule } from '../../../../../shared/shared.module';

const routes: Routes = [
	{
		path: '',
		component: BarcodeResultPage,
	},
];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [BarcodeResultPage],
})
export class BarcodeResultPageModule {}
