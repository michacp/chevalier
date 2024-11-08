import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddclientComponent } from '../../layout/addclient/addclient.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientsService } from '../../service/clients/clients.service';
import { ListClientsI } from '../../models/clients.inteface';
import { ProductsService } from '../../service/products/products.service';
import { ListProductsI } from '../../models/products.inteface';
import { ListHairdresserI } from '../../models/hairdresser.interface';
import { ListpaymentMethodsI, ListdiscountsI, ListfinancialentitysI } from '../../models/payment.interface';
import { SalesService } from '../../service/sales/sales.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-serviceandcuts',
  templateUrl: './serviceandcuts.component.html',
  styleUrl: './serviceandcuts.component.css'
})
export class ServiceandcutsComponent {
  corteForm!: FormGroup;
  modalVisible: boolean = false;
  openModal() {
    this.modalVisible = true;
  }
  closeModal(event: { data: any }) {
    // if (event.data.close) {
    this.modalVisible = false;
    // }
    // if (event.data.data.id) {
    //   this.nameite.unshift({
    //     _id: event.data.data.id,
    //     name_nameitems: event.data.data.name,
    //   });
    //   // this.seleccionarSugerencia(
    //   //   event.data.data.name,
    //   //   event.data.data.id,
    //   //   'name_items'
    //   // );
    // }
  }
  // Datos estáticos
  clientes: ListClientsI[] = [];

  barberos: ListHairdresserI[] = [];

  servicios: ListProductsI[] = [];
  // Datos de descuentos
  descuentos: ListdiscountsI[] = [];
  // Datos de formas de pago
  formasPagos: ListpaymentMethodsI[] = [];
  formasPagosFiltradas: ListpaymentMethodsI[] = [];


  // Servicios agregados
  serviciosAgregados: ListProductsI[] = [];
  total = 0;
  totalConDescuento = 0;
  // Columnas para la tabla
  displayedColumns: string[] = ['servicio', 'precio', 'acciones'];

  // Datos del encabezado de la factura
  facturaInfo = {
    fecha: '2024-10-15',
    comprobante: '',
    cobrador: ''
  };

  constructor(private fb: FormBuilder, public dialog: MatDialog, private clients: ClientsService, private products: ProductsService, private sales: SalesService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddclientComponent, {
      width: '600px',
      // height: '400px',
      disableClose: true,
    });

    dialogRef.componentInstance.closeModalEvent.subscribe((result: any) => {
      if(result.close){
        this.normalfind(result.data)
      }
      console.log('Modal Closed with:', result);
    });
  }

  async normalfind(clienteBuscadorValue:any){
    const data = await this.clients.findClient({ find: clienteBuscadorValue })
    this.clientes = data
  }


  ngOnInit() {
    this.getnewdata()
    this.corteForm = this.fb.group({
      clienteBuscador: ['', Validators.required],
      servicioBuscador: ['', Validators.required],
      barberoBuscador: ['', Validators.required],
      descuentoBuscador: ['', Validators.required],
      observaciones: [''],
      formaPagoBuscador: ['', Validators.required], // Agregar el control para forma de pago
      entidadBancariaBuscador: [''],
      entidadBancaria: [''],
      numeroTransferencia: [''],
    });


  }

  // Calcular total con descuento dependiendo del tipo (PERCENTAGE o FIXED)
  calcularTotalConDescuento(descuento: ListdiscountsI | null) {
    if (!descuento) {
      this.totalConDescuento = this.total; // Sin descuento, total es igual
      return;
    }

    if (descuento.discountType === 'PERCENTAGE') {
      const porcentaje = descuento.value || 0;
      const descuentoAplicado = (this.total * porcentaje) / 100;
      this.totalConDescuento = this.total - descuentoAplicado;
    } else if (descuento.discountType === 'FIXED') {
      const descuentoFijo = descuento.value || 0;
      this.totalConDescuento = this.total - descuentoFijo;
    }
  }

  async getnewdata() {
    const data = await this.sales.getNewSalesData()
    this.facturaInfo.cobrador = data.user
    this.facturaInfo.fecha = data.date
    this.barberos = data.hairdresser
    this.servicios = data.services
    this.formasPagos = data.paymentmethods
    this.formasPagosFiltradas = this.formasPagos;
  }
  // Método para agregar servicio
  agregarServicio(serv: any) {
    const servicio = this.corteForm.get('servicioBuscador')?.value as ListProductsI;
    if (servicio && !this.serviciosAgregados.includes(servicio)) {

      this.serviciosAgregados = [...this.serviciosAgregados, servicio];  // Clona la lista para actualizar la referencia

      this.calcularTotal();
    }
  }

  // Método para manejar el cambio de selección de precio en el select
  handlePriceChange(element: any): void {
    if (element.selectedPrice !== 'custom') {
      element.price = element.selectedPrice; // Actualiza el precio con el valor seleccionado
      element.customPrice = null; // Resetea el campo personalizado si se elige un precio predeterminado
    }
    this.calcularTotal(); // Actualizar el total cuando se selecciona un precio
  }

  // Método para manejar el cambio en el precio personalizado
  updateCustomPrice(element: any): void {
    if (element.selectedPrice === 'custom' && element.customPrice) {
      element.price = element.customPrice; // Actualiza el precio con el valor ingresado en el input
    }
    console.log(element)
    element.price = element.customPrice;
    this.calcularTotal(); // Actualizar el total cuando se cambia el precio personalizado
  }


  // Calcular el total de servicios agregados
  calcularTotal() {
    this.total = this.serviciosAgregados.reduce((acc, curr) => acc + (curr.price || 0), 0);
    this.calcularTotalConDescuento(this.corteForm.get('descuentoBuscador')?.value);

  }
  // Método para eliminar un servicio de la lista
  eliminarServicio(element: any): void {
    // Lógica para eliminar el servicio de la lista
    const index = this.serviciosAgregados.indexOf(element);
    if (index > -1) {
      this.serviciosAgregados.splice(index, 1);
      this.serviciosAgregados = [...this.serviciosAgregados];
      this.calcularTotal();
    }

  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.corteForm.valid) {
      this.savedatasales(this.corteForm.value, this.serviciosAgregados, this.total)
    }
  }
  async savedatasales(formulario: any, servicios: any, total: any) {
    const datosFiltrados = servicios.map((servicio: any) => {
      return {
        _id: servicio._id,
        price: servicio.price,
      };
    });
    const formset = {
      cliente: formulario.clienteBuscador._id,
      barbero: formulario.barberoBuscador._id,
      descuento: formulario.descuentoBuscador._id,
      observaciones: formulario.observaciones,
      formaPago: formulario.formaPagoBuscador._id,
      entidadBancaria: formulario.entidadBancariaBuscador._id || "",
      numeroTransferencia: formulario.numeroTransferencia,
      productosservcio: datosFiltrados,
      total
    }
    const data = await this.sales.Salessave(formset)
    if (data._id) {
      this.ngOnInit()
      this.serviciosAgregados = []
    }
  }



  formaPagoSeleccionada: boolean = false;
  bancos: ListfinancialentitysI[] = [];
  bancosFiltrados: ListfinancialentitysI[] = [];

  onEntidadBancariaSeleccionada(banco: string): void {
    this.corteForm.get('entidadBancaria')?.setValue(banco);
  }

  displayEntidadBancaria(banco: ListfinancialentitysI): string {
    return banco ? banco.name : '';
  }

  // Método para filtrar bancos
  filtrarBancos(valor: string): void {

    const filterValue = valor.toUpperCase();
    this.bancosFiltrados = this.bancos.filter(banco => banco.name.includes(filterValue));
  }
  onFormaPagoSeleccionada(event: any): void {
    const selectedFormaPago = event.name;
    if (selectedFormaPago === 'TRANSFERENCIA') {
      this.getfinancialentitys()

      this.formaPagoSeleccionada = true;
    } else {
      this.formaPagoSeleccionada = false;
    }
  }
  async getfinancialentitys() {
    const data = await this.sales.getSalesfinancialentitys()
    this.bancos = data;
    this.bancosFiltrados = this.bancos;
    this.corteForm.get('entidadBancariaBuscador')?.valueChanges.subscribe((valor) => {
      this.filtrarBancos(valor);
    });
  }


  // Métodos para mostrar el nombre en el autocomplete
  displayCliente(cliente: ListClientsI): string {
    if (!cliente) {
      return '';
    }

    // Devuelve el string correctamente
    return `${cliente.names} ${cliente.lastNames}`;
  }

  displayBarbero(barbero: ListHairdresserI): string {
    if (!barbero) {
      return '';
    }

    return `${barbero.name.trim()} `
  }

  displayServicio(servicio: any): string {
    if (!servicio) {
      return '';
    }

    // Si hay un precio único, mostrar ese precio
    if (servicio.price !== null && servicio.price !== undefined) {
      return `${servicio.name} ${servicio.price}`;
    }

    // Si hay un rango de precios, mostrar el rango
    if (servicio.prices && servicio.prices.length > 0) {
      const minPrice = Math.min(...servicio.prices);
      const maxPrice = Math.max(...servicio.prices);
      return `${servicio.name} ${minPrice} - ${maxPrice}`;
    }

    // En caso de que no haya precio o rango
    return servicio.name;
  }
  // Mostrar el nombre del descuento
  displayDescuento(descuento: ListdiscountsI): string {
    return descuento ? descuento.name : '';
  }
  // Método para mostrar el nombre de la forma de pago
  displayFormaPago(formaPago: ListpaymentMethodsI): string {
    return formaPago ? formaPago.name : '';
  }
  async searchclients() {

    const clienteBuscadorValue = this.corteForm.get('clienteBuscador')?.value; // Obtiene el valor del input
    if (this.validarEstructura(clienteBuscadorValue)) {
      const data = await this.clients.findClient({ find: clienteBuscadorValue })
      this.clientes = data
    }

  }


  onClienteSelected(cliente: ListClientsI) {
    if (cliente) {
      // Aquí haces la llamada para obtener los datos adicionales de manera asíncrona
      this.salesfinddiscount(cliente._id)
    }
  }

  async salesfinddiscount(data: any) {
    const datas = await this.sales.getSalesDiscount({ find: data })
    this.descuentos = datas
  }


  async searchproducts() {

    const productoBuscadorValue = this.corteForm.get('servicioBuscador')?.value; // Obtiene el valor del input
    if (this.validarEstructura(productoBuscadorValue)) {
      const data = await this.products.findProduct({ find: productoBuscadorValue })
      this.servicios = data
    }

  }




  validarEstructura(input: any): boolean {
    // Verifica si el input no es un objeto con la estructura { id: '1', nombre: 'Cliente 1' }
    if (typeof input !== 'object' || !input.id || !input.nombre) {
      // Verifica si es un string
      if (typeof input === 'string') {
        // Elimina los espacios iniciales y finales
        const trimmedInput = input.trim();
        // Verifica si el string tiene más de 3 caracteres
        if (trimmedInput.length > 2) {
          // Si cumple, realiza alguna acción 
          return true;
        }
      }
    }
    // Si no cumple, retorna false o realiza alguna otra acción 
    return false;
  }
}
