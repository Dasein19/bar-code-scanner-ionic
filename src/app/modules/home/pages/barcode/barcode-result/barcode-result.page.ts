import { Component, OnInit } from '@angular/core';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { BarcodeDataService } from '../../../../../shared/services/data-transfer/barcode-data.service';
import { BarcodableService } from '../../../../../shared/services/utils/barcodable.service';
import { HTTPResponse } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { GoogleSearchService } from '../../../../../core/services/google/google-search.service';

@Component({
	selector: 'app-barcode-result',
	templateUrl: './barcode-result.page.html',
	styleUrls: ['./barcode-result.page.scss'],
})
export class BarcodeResultPage implements OnInit {
	scanResult: BarcodeScanResult = {} as BarcodeScanResult;
	barcodeImageUrl: string;
	codeResult: any;

	constructor(
		private loadingController: LoadingController,
		private barcodeDataService: BarcodeDataService,
		private barcodableService: BarcodableService,
		private googleSearchService: GoogleSearchService
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
		this.barcodableService.getBarcodeInfo(this.scanResult.format, this.scanResult.text).then(
			(res: HTTPResponse) => {
				console.log(res);
				this.codeResult = JSON.parse(res.data);
				//TODO: probably it is possible to query directly for a single result
				let barCodeDescription = this.barcodableService.extractBarCodeTitle(res.data);
				if (barCodeDescription == null) {
					this.loadingController.dismiss();
					return;
				}
				this.googleSearchService.searchForImage(barCodeDescription).then(
					(res: HTTPResponse) => {
						console.log(res);
						this.barcodeImageUrl = this.googleSearchService.extractImageFromResult(res.data);
						console.log(this.barcodeImageUrl);
						this.loadingController.dismiss();
					},
					(err: HTTPResponse) => {
						console.error(err);
						this.loadingController.dismiss();
					}
				);
			},
			(err: HTTPResponse) => {
				console.error(err);
				this.loadingController.dismiss();
				this.barcodeImageUrl = null;
				this.codeResult = 'Could not retrieve any info...';
			}
		);
	}
}
