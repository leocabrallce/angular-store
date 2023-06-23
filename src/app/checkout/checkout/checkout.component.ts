import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/cart/cart.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  faCheck = faCheck;
  form = new FormGroup({
    firstName: new FormControl<string>('', { validators: Validators.required }),
    lastName: new FormControl<string>('', { validators: Validators.required }),
    email: new FormControl<string>('', { validators: Validators.required }),
    address: new FormControl<string>('', { validators: Validators.required }),
    country: new FormControl<string>('', { validators: Validators.required }),
    zipcode: new FormControl<string>('', { validators: Validators.required }),
    state: new FormControl<string>('', { validators: Validators.required }),
    acceptedTerms: new FormControl<boolean>(false, { validators: Validators.requiredTrue }),
  });
  dialogOpen = false;
  countrySubscription: any;

  constructor(private http: HttpClient, private cartService: CartService) {
    this.countrySubscription = this.form.get('country')!.valueChanges.subscribe((country) => {
      if (country !== 'us') {
        this.form.get('state')!.setValidators(Validators.required);
        this.form.get('state')!.updateValueAndValidity();
      } else {
        this.form.get('state')!.clearValidators();
        this.form.get('state')!.updateValueAndValidity();
      }
    });
  }

  submit() {
    if (this.form.valid) {
      this.sendEmail();
    }
  }

  sendEmail() {
    this.http.post('http://localhost:3000/orders', {
      subject: 'Order confirmation',
      email: 'Your order has been confirmed',
    }, {
      responseType: 'text',
    }).subscribe((res) => {
      this.dialogOpen = true;
      this.cartService.clearCart();
    });
  }
}
