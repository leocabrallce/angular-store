import { Directive, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../store.service';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  keywords$: Observable<string>;

  constructor(private storeService: StoreService, private el: ElementRef) {
    this.keywords$ = this.storeService.keywords$;
  }

  ngAfterViewChecked() {
    this.keywords$.subscribe(keywords => {
      if (!keywords) return;
      const value = this.el.nativeElement.innerText;
      const regex = new RegExp(keywords, 'gi');
      const result = value.replace(regex, "<span class='bg-yellow-300'>$&</span>");
      this.el.nativeElement.innerHTML = result;
    });
  }
}
