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
			'?key=' +
			encodeURIComponent(this.GoogleCredentialsEnum.API_KEY) +
			'&cx=' +
			encodeURIComponent(this.GoogleCredentialsEnum.CX) +
			'&q=' +
			encodeURIComponent(queryText) +
			'&searchType=image&fileType=jpg&imgSize=small&alt=json'
		);
	}

	public searchForImage(imageDescription: string): Promise<HTTPResponse> {
		return this.http.get(this.buildUrl(imageDescription), {}, {});
	}

	public extractImageFromResult(serviceResponse: any): string {
		try {
			return JSON.parse(serviceResponse).items[0].link;
		} catch (err) {
			console.error(err);
			return null;
		}
	}
}
