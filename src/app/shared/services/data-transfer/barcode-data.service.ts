import { Injectable } from '@angular/core';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Injectable()
export class BarcodeDataService {
	private barcodeScanResult: BarcodeScanResult;
	constructor() {}

	public setBarCodeScanResult(barcodeScanResult: BarcodeScanResult): void {
		this.barcodeScanResult = JSON.parse(JSON.stringify(barcodeScanResult));
	}

	public getBarCodeScanResult(): BarcodeScanResult {
		return JSON.parse(JSON.stringify(this.barcodeScanResult));
	}
}
