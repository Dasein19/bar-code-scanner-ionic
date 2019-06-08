import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSearchService } from './services/google/google-search.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [GoogleSearchService],
})
export class CoreModule {}
