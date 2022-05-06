import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {

  /** objetos que contienen los datos de los formularios */
  newOrder: any;
  newProduct: any;

  /** Arreglos que almacenan la lista de usuarios y ordenes consultadas al endpoint */
  orders: any;
  users: any;
  user:any;

  /** variables de control para realizar acciones */
  createProduct = false;
  updateOrder = false;

  constructor(
    private orderSevice: OrderService,
    private userSevice: UserService,
    private productService: ProductService,
    private modalService: NgbModal,
    private authService : AuthService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.getOrders();
    this.getUsers();
    this.newOrder = [];
    this.newProduct = [];
  }

  /** Lista todas las ordenes*/
  async getOrders() {
    const data = await this.orderSevice.list();
    console.log(data);
    this.orders = (data as any).orders;
  }

  /** Eliminar orden por id */
  async deleteOrder(order: any) {
    const data = await this.orderSevice.delete({ IdOrder: order.IdOrder });
    console.log(data);
    this.getOrders();
  }

  /** Metodo para guardar y actualizar ordenes y para crear productos */
  async saveOrUpdateOrder() {

    const params = {
      IdUser: parseInt(this.user.IdUser),
      IdOrder: parseInt(this.newOrder.IdOrder),
      OrderNumber: this.newOrder.numOrden,
      DateTime: this.newOrder.fecha,
      ProviderName: this.newOrder.proveedor,
      DateCreated: this.newOrder.fecha,
      Observation: this.newOrder.obs,
      TotalValue: this.newOrder.total,
      Status: 1
    }
    console.log(params);

    const productParams = {
      IdOrder: 1,
      ...this.newProduct,
      Status: 1
    }
    const data = this.updateOrder ? await this.orderSevice.update(params) : await this.orderSevice.create(params);
    const product = this.createProduct && this.newProduct ? await this.productService.create(productParams): null;
    console.log(data,product);
    this.getOrders();
    this.newOrder = [];
    this.newProduct = [];
    this.updateOrder = false;
  }

  /** Obtiene la lista de usuarios */
  async getUsers() {
    const data = await this.userSevice.list();
    console.log(data);
    this.users = (data as any).users;
  }

  /** Metodo para abrir el modal de crear nueva Orden */
  async openFormNewOrder(element: any) {
    this.newOrder.usuario = "";
    let options: NgbModalOptions = {
      size: 'xl',
      centered: true,
      scrollable: true,
    };
    this.modalService.open(element, options);
  }

  getCurrentUser(){
    const user = this.authService.getUser();
    this.user = user != null ? user : null;
  }

  logOut(){
    this.authService.logOut();
  }
  /** Metodo para abrir el modal de actualizar Orden */
  async openFormUpdateOrder(element: any, order:any) {

    this.newOrder.usuario = order.IdUser;
    this.newOrder.numOrden = order.OrderNumber;
    this.newOrder.fecha = order.DateTime;
    this.newOrder.proveedor = order.ProviderName;
    this.newOrder.obs = order.Observation;
    this.newOrder.total = order.TotalValue;
    this.newOrder.IdOrder = order.IdOrder

    let options: NgbModalOptions = {
      size: 'xl',
      centered: true,
      scrollable: true,
    };
    this.modalService.open(element, options);
  }

}


