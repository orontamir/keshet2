import { Component, Input } from '@angular/core';
import { Invoice } from '../invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.css']
})
export class InvoicePreviewComponent {
  @Input() invoices: Invoice[] = [];

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate(['/invoice', id]);
  }
}
