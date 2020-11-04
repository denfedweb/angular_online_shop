import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-main-loyout',
  templateUrl: './main-loyout.component.html',
  styleUrls: ['./main-loyout.component.scss']
})
export class MainLoyoutComponent implements OnInit {
  type = 'Phone';
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }
  setType(type){
   this.type = type;

   if (this.type !== 'Cart') {
      this.router.navigate(['/'], {
        queryParams: {
          type: this.type
        }
      });
      this.productService.setType(this.type);
   }
  }

}
