import { Injectable } from '@angular/core';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
	providedIn: 'root',
})
export class BarcodeDataService {
	barcodeScanResult: BarcodeScanResult;
	constructor() {}

	public setBarCodeScanResult(barcodeScanResult: BarcodeScanResult): void {
		this.barcodeScanResult = barcodeScanResult;
	}

	public getBarCodeScanResult(): BarcodeScanResult {
		return this.barcodeScanResult;
	}
}
