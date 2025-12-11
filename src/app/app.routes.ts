import { Routes } from '@angular/router';
import { About } from './about/about';
import { Main } from './main/main';
import { Fruits } from './fruits/fruits';
import { Contact } from './contact/contact';
import { Error } from './error/error';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';
import { Support } from './support/support';
import { Gallery } from './login/gallery/gallery';
import { FruitGallery } from './login/gallery/fruit-gallery/fruit-gallery';
import { CustomerStories } from './login/gallery/customer-stories/customer-stories';
import { FarmGallery } from './login/gallery/farm-gallery/farm-gallery';
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
    path:'login',
    loadChildren:()=>import('./login/login.routes').then(m=>m.loginRoutes)
    
    },
    {
        path: '',
        component: Gallery,
        children: [
          { path: 'fruit-gallery', component:FruitGallery  },
          { path: 'customer-stories', component: CustomerStories},
          { path: 'farm-gallery', component: FarmGallery},
          { path: '', redirectTo: 'fruit-gallery', pathMatch: 'full' }
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
