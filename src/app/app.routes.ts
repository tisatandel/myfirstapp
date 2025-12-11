import { Routes } from '@angular/router';
import { About } from './about/about';
import { Main } from './main/main';
import { Fruits } from './fruits/fruits';
import { Contact } from './contact/contact';
import { Error } from './error/error';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';
import { Support } from './support/support';
import { Login } from './login/login';
import { Admin } from './login/admin/admin';
import { Customer } from './login/customer/customer';
import { Supplier } from './login/supplier/supplier';
export const routes: Routes = [
    {
    path:'main',component:Main
    },
    {
    path:'about',component:About
    },
    {
    path:'fruits',component:Fruits
    },
    {
    path:'contact',component:Contact
    },
    {
    path:'privacy',component:Privacy
    },
    {
    path:'terms',component:Terms
    },
    {
    path:'support',component:Support
    },
    {
    path:'login',component:Login,
    children:[
     {
    path:'admin',component:Admin
    },   
    {
    path:'customer',component:Customer
    },
    {
    path:'supplier',component:Supplier
    },
    {
        path:'',
        redirectTo:'admin',
        pathMatch:'full'
    }
    ]
    },
    {
        path:'',
        redirectTo:'main',
        pathMatch:'full'
    },
    {
    path:'**',component:Error
    }
    
];
