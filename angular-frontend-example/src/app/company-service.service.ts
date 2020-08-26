import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  constructor(public http: HttpClient) {}

  readonly URL = 'http://localhost:8085';
  readonly DATA_URL =
    'http://www.filltext.com/?rows=100&pretty=true&id={index}&name={business}&address={addressObject}';

  public getAddressbook() {
    return this.http.get(this.URL + '/api/addressbook', {
      responseType: 'text' as 'json',
    });
  }
  public removeAddress(id) {
    return this.http.delete(this.URL + '/api/delete/' + id.toString());
  }

  public getCompanies() {
    return this.http.get(this.DATA_URL);
  }

  public changeButtonText(id) {
    let btn = document.getElementById(id) as HTMLButtonElement;
    btn.innerHTML = 'saved';
    btn.disabled = true;
  }

  public saveCompany(company) {
    this.changeButtonText(company.id);
    return this.createCompany(company);
  }
  public createCompany(company) {
    let newCompany = {
      name: company.name,
      street_address: company.address.streetAddress,
      city: company.address.city,
      state: company.address.state,
      zip: company.address.zip,
    };
    return this.http.post(this.URL + '/api/company', newCompany);
  }
}
