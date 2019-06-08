import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(private barcodeScanner: BarcodeScanner, private router: Router, public vibration: Vibration) {}

	scanResult: any;
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
		let self = this;
		this.barcodeScanner
			.scan(this.barcodeScannerOptions)
			.then(barcodeData => {
				console.log('Barcode data', barcodeData);
				this.scanResult = barcodeData;
				this.navigate();
				this.vibration.vibrate(1000);
			})
			.catch(err => {
				console.log('Error', err);
			});
	}

	navigate() {
		this.router.navigate(['/home/barcode-result']);
	}
}
