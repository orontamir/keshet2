import { RouterModule, Routes } from '@angular/router';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: InvoiceSearchComponent },
  { path: 'invoice/:id', component: InvoiceDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    InvoiceSearchComponent,
    InvoiceListComponent,
    InvoicePreviewComponent,
    InvoiceDetailComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class AppModule { }
