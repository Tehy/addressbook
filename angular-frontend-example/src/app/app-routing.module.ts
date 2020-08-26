import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListingComponent } from './company-listing/company-listing.component';
import { AddressBookComponent } from './address-book/address-book.component';

const routes: Routes = [
  { path: '', component: CompanyListingComponent },
  { path: 'address-book', component: AddressBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
