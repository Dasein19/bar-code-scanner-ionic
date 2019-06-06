import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(private barcodeScanner: BarcodeScanner) {}

	scanResult: any;

	openBarCodeScanner() {
		this.barcodeScanner
			.scan()
			.then(barcodeData => {
				console.log('Barcode data', barcodeData);
				this.scanResult = barcodeData;
			})
			.catch(err => {
				console.log('Error', err);
			});
	}
}
