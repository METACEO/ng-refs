import { Injectable } from '@angular/core';

@Injectable()
export class GetComputedStyleRef {
  native(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration {
    return getComputedStyle(elt, pseudoElt);
  }
}
