import { Injectable } from '@angular/core';
import { CodeFormats } from './models/barcodable.formats';

@Injectable({
	providedIn: 'root',
})
export class BarcodableService {
	//https://www.barcodable.com/documentation
	barcodableBaseUrl = 'https://api.barcodable.com/api/v1';
	codeFormatsEnum = CodeFormats;

	constructor() {}

	public buildBarcodableUrl(codeFormat: string, codeNumber: string): string {
		let finalUrl: string;
		let trgFormat: string;

		let upcRegex = new RegExp(this.codeFormatsEnum.upc, 'i');
		let eanRegex = new RegExp(this.codeFormatsEnum.ean, 'i');
		let asinRegex = new RegExp(this.codeFormatsEnum.asin, 'i');

		switch (true) {
			case upcRegex.test(codeFormat):
				trgFormat = this.codeFormatsEnum.upc;
				break;
			case eanRegex.test(this.codeFormatsEnum.ean):
				trgFormat = this.codeFormatsEnum.ean;
				break;
			case asinRegex.test(this.codeFormatsEnum.asin):
				trgFormat = this.codeFormatsEnum.asin;
				break;
			default:
				trgFormat = '';
		}

		finalUrl = this.barcodableBaseUrl + '/' + trgFormat + '/' + codeNumber;

		return finalUrl;
	}

	public extractBarCodeTitle(srcData): string {
		return JSON.parse(srcData).item.matched_items.title;
	}
}
