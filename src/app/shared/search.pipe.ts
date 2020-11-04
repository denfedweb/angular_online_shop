import { Pipe, PipeTransform } from '@angular/core';
import {ProductDataResponse} from './interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: ProductDataResponse[], productName: string = '') {
    if (!productName.trim()) {
      return products;
    }

    return products.filter(product => product.title.toLowerCase().includes(productName.toLowerCase()));
  }

}
