import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(private barcodeScanner: BarcodeScanner, private router: Router) {}

	scanResult: any;

	openBarCodeScanner() {
		this.barcodeScanner
			.scan()
			.then(barcodeData => {
				console.log('Barcode data', barcodeData);
				this.scanResult = barcodeData;
				this.navigate;
			})
			.catch(err => {
				console.log('Error', err);
			});
	}

	navigate() {
		this.router.navigate(['/home/barcode-result']);
	}
}
