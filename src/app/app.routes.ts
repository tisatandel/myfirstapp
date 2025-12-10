import { Routes } from '@angular/router';
import { About } from './about/about';
import { Main } from './main/main';
import { Fruits } from './fruits/fruits';
import { Contact } from './contact/contact';
import { Error } from './error/error';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';
import { Support } from './support/support';
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
        path:'',
        redirectTo:'main',
        pathMatch:'full'
    },
    {
    path:'**',component:Error
    }
    
];
