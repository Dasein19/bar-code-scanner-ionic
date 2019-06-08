import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeDataService } from './services/data-transfer/barcode-data.service';
import { BarcodableService } from './services/utils/barcodable.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [BarcodeDataService, BarcodableService],
})
export class SharedModule {}
