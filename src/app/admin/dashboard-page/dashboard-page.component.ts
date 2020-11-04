import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  products = [];
  pSub: Subscription;
  removeSub: Subscription;
  productName: string;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.pSub = this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
  ngOnDestroy(){
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.removeSub) {
      this.removeSub.unsubscribe();
    }
  }
  removeProduct(id){
    this.removeSub = this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

}
