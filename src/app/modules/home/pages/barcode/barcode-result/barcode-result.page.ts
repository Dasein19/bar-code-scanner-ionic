import { Component, OnInit } from '@angular/core';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { ActivatedRoute } from '@angular/router';
import { BarcodeDataService } from '../../../../../shared/directive/data-transfer/barcode-data.service';

@Component({
	selector: 'app-barcode-result',
	templateUrl: './barcode-result.page.html',
	styleUrls: ['./barcode-result.page.scss'],
})
export class BarcodeResultPage implements OnInit {
	scanResult: BarcodeScanResult;

	constructor(private route: ActivatedRoute, private barcodeDataService: BarcodeDataService) {}

	ngOnInit() {
		this.scanResult = this.barcodeDataService.getBarCodeScanResult();
	}
}
