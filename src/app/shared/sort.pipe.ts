import { Pipe, PipeTransform } from '@angular/core';
import {ProductDataResponse} from './interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: ProductDataResponse[], productType: string = '') {
    if (!productType.trim()) {
      return products;
    }

    return products.filter(product => product.type === productType);
  }

}
