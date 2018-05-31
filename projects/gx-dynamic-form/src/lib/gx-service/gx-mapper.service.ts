import { Injectable } from '@angular/core';
import { components } from './gx-component-mapper';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class GxMapperService {
  components: any;
  constructor() {
    this.components = components;
  }

  mapComponents(comps) {
    if (comps) {
      this.components = Object.assign(this.components, comps);
    }
  }

  getMappedComponent(compName) {
    return (this.components[compName]);
  }
}
