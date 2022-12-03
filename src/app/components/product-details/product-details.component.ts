import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  product: any;
  constructor(
    private dataService: DataService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    this.getProductDetails();
  }
  getProductDetails() {
    this.product = this.dataService.getProducts().find((x) => x.id == this.id);
    console.log(this.product);
  }
}
