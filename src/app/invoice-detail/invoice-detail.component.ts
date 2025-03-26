import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice, InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  invoice?: Invoice;

  constructor(private route: ActivatedRoute,
              private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.invoiceService.getInvoiceById(id).subscribe(data => {
      this.invoice = data;
    });
  }
}
