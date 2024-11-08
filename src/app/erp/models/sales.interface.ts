export interface ListSalesI {
    id?:string;
    saleNumber: number;
    client: string;
    barber: string;
    saleDate: Date;
    total: number;
    productService: string; // Nombre de producto o servicio
    seller: string; // Nombre del vendedor
    type: 'producto' | 'servicio'; // Tipo de venta

}
 
  
export interface ListBarberI {
    id: string;
    name: string;
  }
  
  export interface ListTypeproductserviceI{
    _id?:any;
    name?:any;
  }