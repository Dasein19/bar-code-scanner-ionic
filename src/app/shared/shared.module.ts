import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeDataService } from './directive/data-transfer/barcode-data.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [BarcodeDataService],
})
export class SharedModule {}
