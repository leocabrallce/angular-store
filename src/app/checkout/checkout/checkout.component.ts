import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  constructor(private http: HttpClient) { }

  sendEmail() {
    this.http.post('http://localhost:3000/orders', {
      subject: 'Order confirmation',
      email: 'Your order has been confirmed',
    }, {
      responseType: 'text',
    }).subscribe((res) => {
      console.log(res);
    });
  }
}
