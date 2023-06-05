import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnDestroy {
  keywords$: Observable<string>;
  keywordsSubscription!: Subscription;

  constructor(private catalogueService: CatalogueService, private el: ElementRef, private sanitizer: DomSanitizer) {
    this.keywords$ = this.catalogueService.keywords$;
  }

  ngAfterViewChecked() {
    this.keywordsSubscription = this.keywords$.subscribe(keywords => {
      if (!keywords) this.sanitizer.sanitize(1, this.el.nativeElement.innerText);
      const value = this.el.nativeElement.innerText;
      const regex = new RegExp(keywords, 'gi');
      const result = value.replace(regex, "<span class='bg-yellow-300'>$&</span>");
      this.el.nativeElement.innerHTML = result;
    });
  }

  ngOnDestroy() {
    this.keywordsSubscription.unsubscribe();
  }
}
