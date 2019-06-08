import { Component, OnInit } from '@angular/core';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { BarcodeDataService } from '../../../../../shared/services/data-transfer/barcode-data.service';
import { BarcodableService } from '../../../../../shared/services/utils/barcodable.service';

@Component({
	selector: 'app-barcode-result',
	templateUrl: './barcode-result.page.html',
	styleUrls: ['./barcode-result.page.scss'],
})
export class BarcodeResultPage implements OnInit {
	scanResult: BarcodeScanResult;
	codeResult: JSON;

	constructor(
		private httpClient: HttpClient,
		private barcodeDataService: BarcodeDataService,
		private barcodableService: BarcodableService
	) {}

	ngOnInit() {
		this.scanResult = this.barcodeDataService.getBarCodeScanResult();
		let barcodableUrl = this.barcodableService.buildBarcodableUrl(this.scanResult.format, this.scanResult.text);
		this.httpClient.get(barcodableUrl).subscribe((res: JSON) => {
			console.log(res);
			this.codeResult = res;
		});
	}
}
