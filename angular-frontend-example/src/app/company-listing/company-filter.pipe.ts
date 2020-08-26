import { PipeTransform, Pipe } from '@angular/core';
import { Company } from '../model/Company';

@Pipe({
  name: 'companyFilter',
})
export class CompanyFilterPipe implements PipeTransform {
  transform(companies: Company[], searchTerm: string) {
    if (!searchTerm) {
      return companies;
    }
    return companies.filter((c) => c.name.toLowerCase().includes(searchTerm));
  }
}
