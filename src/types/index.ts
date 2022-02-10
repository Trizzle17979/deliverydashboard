export interface User {
  email: string;
  user_metadata: {
    first_name: string;
    last_name: string;
  };
}

export interface MappedInterface {
  user: User;
  isFetching: boolean;
  error: string;
  isLoggedIn: boolean;
  deliveryData: DataArray;
}

export interface DataArray {
  id: number;
  delivery_date: string;
  total_pay: number;
  total_orders: number;
  total_miles: number;
  total_mpg: number;
  total_time: number;
  gas_price: number;
  gas_cost: number;
  miles_per_order: number;
  cost_per_order: number;
  cost_to_operate: number;
  net_pay: number;
  net_pay_per_hour: number;
}
