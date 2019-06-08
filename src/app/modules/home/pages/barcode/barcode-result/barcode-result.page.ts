import { Component, OnInit } from '@angular/core';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { BarcodeDataService } from '../../../../../shared/services/data-transfer/barcode-data.service';
import { BarcodableService } from '../../../../../shared/services/utils/barcodable.service';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
	selector: 'app-barcode-result',
	templateUrl: './barcode-result.page.html',
	styleUrls: ['./barcode-result.page.scss'],
})
export class BarcodeResultPage implements OnInit {
	scanResult: BarcodeScanResult = {} as BarcodeScanResult;
	codeResult: any = {};

	constructor(
		private loadingController: LoadingController,
		private barcodeDataService: BarcodeDataService,
		private barcodableService: BarcodableService,
		private http: HTTP
	) {}

	ngOnInit() {
		this.loadingController
			.create({ keyboardClose: true, spinner: 'bubbles', cssClass: 'ionic-loader' })
			.then(res => {
				res.present();
				this.initializeBarcodeResult();
			});
	}

	initializeBarcodeResult() {
		this.scanResult = this.barcodeDataService.getBarCodeScanResult();
		let barcodableUrl = this.barcodableService.buildBarcodableUrl(this.scanResult.format, this.scanResult.text);
		this.http
			.get(barcodableUrl, {}, {})
			.then(
				(res: HTTPResponse) => {
					console.log(res);
					this.codeResult = JSON.parse(res.data);
				},
				(res: HTTPResponse) => {
					console.error(res);
					this.codeResult = {};
				}
			)
			.finally(() => {
				this.loadingController.dismiss();
			});
	}
}
