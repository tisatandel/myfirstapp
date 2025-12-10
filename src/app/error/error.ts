import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-error',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error {
 
}
