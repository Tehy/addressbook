import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.css'],
})
export class CompanyListingComponent implements OnInit {
  constructor(private service: CompanyServiceService) {}

  ngOnInit(): void {
    this.getCompanies();
  }
  searchTerm: string;
  companies: any;

  getCompanies() {
    this.service.getCompanies().subscribe((c) => {
      this.companies = c;
    });
  }
  saveCompany(company) {
    this.service.saveCompany(company).subscribe(() => {});
  }
}
