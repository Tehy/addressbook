import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListingComponent } from './company-listing/company-listing.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { CompanyServiceService } from './company-service.service';
import { CompanyFilterPipe } from './company-listing/company-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListingComponent,
    AddressBookComponent,
    CompanyFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CompanyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
