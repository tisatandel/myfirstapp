import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected phone='+91 98765 43210';
  protected siteName = '🍓 Fruit Basket';
  protected siteDescription = 'Your one-stop shop for fresh, organic, and seasonal fruits.We deliver farm-fresh fruits directly to your doorstep, ensuring quality and taste in every bite.';
  protected address = '123 Green Market Road, Valsad, Gujarat, India';
  protected email = 'support@fruitbasket.com';
  protected ImageUrl ='images/logo.png';
  protected name ?:string;
  protected emailInput = signal("tisatandel@gmail.com");
  protected message = '';
}
