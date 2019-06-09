import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { BarcodeDataService } from '../../shared/services/data-transfer/barcode-data.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(
		private router: Router,
		private barcodeScanner: BarcodeScanner,
		public vibration: Vibration,
		private barcodeDataService: BarcodeDataService
	) {}

	barcodeScannerOptions: BarcodeScannerOptions;

	ngOnInit(): void {
		this.barcodeScannerOptions = {
			preferFrontCamera: false, // iOS and Android
			showFlipCameraButton: true, // iOS and Android
			showTorchButton: true, // iOS and Android
			torchOn: false, // Android, launch with the torch switched on (if available)
			prompt: 'Place a barcode inside the scan area', // Android
			resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
			orientation: 'portrait', // Android only (portrait|landscape), default unset so it rotates with the device
			disableAnimations: true, // iOS
			disableSuccessBeep: true, // iOS and Android
		};
	}

	openBarCodeScanner() {
		this.barcodeScanner
			.scan(this.barcodeScannerOptions)
			.then(barcodeData => {
				console.log('Barcode data', barcodeData);
				if (!barcodeData.cancelled) {
					this.barcodeDataService.setBarCodeScanResult(barcodeData);
					this.vibration.vibrate(1000);
					this.navigate();
				}
			})
			.catch(err => {
				console.error('Error', err);
			});
	}

	openTestBarCodeScanner() {
		var mockedResult: BarcodeScanResult = {
			cancelled: false,
			format: 'UPC_E',
			text: '190198155795',
		};
		this.barcodeDataService.setBarCodeScanResult(mockedResult);
		this.navigate();
	}

	navigate() {
		this.router.navigate(['/home/barcode-result']);
	}
}
