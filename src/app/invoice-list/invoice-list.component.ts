import { Component, Input } from '@angular/core';
import { Invoice } from '../invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent {
  @Input() invoices: Invoice[] = [];

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate(['/invoice', id]);
  }
}
