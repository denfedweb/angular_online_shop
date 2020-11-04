import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/product.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductDataResponse} from '../../shared/interfaces';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  form: FormGroup;
  product: ProductDataResponse;
  submitted = false;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.productService.getProductById(params.id);
      })
    ).subscribe(product => {
      this.product = product;
      this.form = new FormGroup({
        type: new FormControl(this.product.type, Validators.required),
        title: new FormControl(this.product.title, Validators.required),
        info: new FormControl(this.product.info, Validators.required),
        photo: new FormControl(this.product.photo, Validators.required),
        price: new FormControl(this.product.price, Validators.required),
      });
    });
  }
  submit(){
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const product = {
      ...this.product,
      type: this.form.value.type,
      title: this.form.value.title,
      info: this.form.value.info,
      photo: this.form.value.photo,
      price: this.form.value.price,
      date: new Date()
    };
    this.productService.updateProduct(product).subscribe((res) => {
      this.submitted = false;
      this.router.navigate(['/admin', 'dashboard']);
    });
  }

}
