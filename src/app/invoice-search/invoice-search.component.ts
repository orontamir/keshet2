import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  styleUrls: ['./invoice-search.component.css']
})
export class InvoiceSearchComponent implements OnInit {
  invoices: Invoice[] = [];
  filteredInvoices: Invoice[] = [];
  searchTerm: string = '';
  selectedDate: string = '';
  viewMode: 'list' | 'preview' = 'list';

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe(data => {
      this.invoices = data;
      this.filteredInvoices = data;
    });
  }

  filterInvoices(): void {
    this.filteredInvoices = this.invoices.filter(inv => {
      const termMatch = this.searchTerm ?
        (inv.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
         inv.supplier.toLowerCase().includes(this.searchTerm.toLowerCase()))
        : true;
      const dateMatch = this.selectedDate ?
        (new Date(inv.date).toDateString() === new Date(this.selectedDate).toDateString())
        : true;
      return termMatch && dateMatch;
    });
  }

  onSearchChange(value: string): void {
    this.searchTerm = value;
    this.filterInvoices();
  }

  onDateChange(value: string): void {
    this.selectedDate = value;
    this.filterInvoices();
  }

  toggleView(): void {
    this.viewMode = this.viewMode === 'list' ? 'preview' : 'list';
  }
}