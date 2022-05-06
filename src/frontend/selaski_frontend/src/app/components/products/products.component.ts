import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any; /** Arreglo que almacena la lista de productos*/
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  /** Metodo que obtiene la lista de productos*/
  async getProducts(){
    const data = await this.productService.list();
    this.products = (data as any).products;
  }

  /** Metodo para eliminar producto*/
  async deleteProduct(product:any){
    const data = await this.productService.delete({ IdOrdersProducts: product.IdOrdersProducts });
    this.getProducts();
  }
}
