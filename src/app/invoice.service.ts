import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Invoice {
  id: number;
  name: string;
  supplier: string;
  cost: number;
  date: Date;
  path: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoices: Invoice[] = [
    { id: 1, name: 'יום צילום', supplier: 'אורון', cost:500, date: new Date('2024-01-01'), path: "assets/images/invoice.png",status: 'success' },
    { id: 2, name: 'יום הקלטות', supplier: 'נתנאל', cost:500, date: new Date('2024-01-02'), path: "assets/images/invoice.png", status: 'error'  },
    { id: 3, name: 'יום הכנה', supplier: 'נעמה', cost:500,date: new Date('2024-01-03'), path: "assets/images/invoice.png", status: 'success'  },
    { id: 4, name: 'יום עיון', supplier: 'דוד', cost:500,date: new Date('2025-01-03'), path: "assets/images/invoice.png", status: 'panding'  },
  ];

  constructor() {}

  getInvoices(): Observable<Invoice[]> {
    return of(this.invoices);
  }

  getInvoiceById(id: number): Observable<Invoice | undefined> {
    const invoice = this.invoices.find(inv => inv.id === id);
    return of(invoice);
  }
}
