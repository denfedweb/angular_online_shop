import { Component, OnInit, OnDestroy } from '@angular/core';
import {OrderService} from '../../shared/order.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit, OnDestroy {
  orders = [];
  pSub: Subscription;
  removeSub: Subscription;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.pSub = this.orderService.getAllOrders().subscribe(orders => {
      this.orders = orders;
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
  removeOrder(id){
    this.removeSub = this.orderService.removeOrder(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== id);
    });
  }

}
