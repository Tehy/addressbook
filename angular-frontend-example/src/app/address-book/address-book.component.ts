import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css'],
})
export class AddressBookComponent implements OnInit {
  constructor(private service: CompanyServiceService) {}

  ngOnInit(): void {
    this.getAddressbook();
  }

  addressbook: any;
  getAddressbook() {
    this.service.getAddressbook().subscribe((a) => {
      this.addressbook = a;
      this.addressbook = JSON.parse(this.addressbook);
    });
  }
  removeAddresss(id) {
    this.service.removeAddress(id).subscribe(() => {
      this.addressbook = this.addressbook.filter((a) => a.id != id);
    });
  }

  returnToCoList() {
    return null;
  }
}
