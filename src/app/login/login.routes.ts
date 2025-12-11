import { Routes } from '@angular/router';
import { Login } from './login';
import { Admin } from './admin/admin';
import { Customer } from './customer/customer';
import { Supplier } from './supplier/supplier';

export const loginRoutes: Routes = [
  {
    path: '',
    component: Login,
    children: [
      { path: 'admin', component: Admin },
      { path: 'customer', component: Customer},
      { path: 'supplier', component: Supplier },
      { path: '', redirectTo: 'admin', pathMatch: 'full' }
    ]
  }
];
