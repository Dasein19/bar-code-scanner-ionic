import { Injectable } from '@angular/core';
import { GoogleCredentials } from '../../authentication/google-credentials/google-credentials.model';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

@Injectable({
	providedIn: 'root',
})
export class GoogleSearchService {
	GoogleCredentialsEnum = GoogleCredentials;
	baseGoogleServiceUrl: string = 'https://www.googleapis.com/customsearch/v1';

	//values defaulted to jpg...to parameterize
	constructor(private http: HTTP) {}

	private buildUrl(queryText: string): string {
		return (
			this.baseGoogleServiceUrl +
			'?q=' +
			encodeURIComponent(queryText) +
			'&cx=' +
			encodeURIComponent(this.GoogleCredentialsEnum.CX) +
			'&fileType=jpg%2Cpng&key=' +
			encodeURIComponent(this.GoogleCredentialsEnum.API_KEY)
		);
	}

	public searchForImage(imageDescription: string): Promise<HTTPResponse> {
		return this.http.get(this.buildUrl(imageDescription), {}, {});
	}

	public extractImageFromResult(serviceResponse: any): string {
		return JSON.parse(serviceResponse).items[0].pagemap.cse_thumbnail[0].src;
	}
}
