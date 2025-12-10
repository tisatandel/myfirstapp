import { Routes } from '@angular/router';
import { About } from './about/about';
import { Main } from './main/main';
import { Fruits } from './fruits/fruits';
import { Contact } from './contact/contact';
import { Error } from './error/error';
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
        path:'',
        redirectTo:'main',
        pathMatch:'full'
    },
    {
    path:'**',component:Error
    }
    
];
