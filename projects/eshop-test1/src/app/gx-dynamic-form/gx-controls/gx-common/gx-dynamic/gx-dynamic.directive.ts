import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GxTextareaComponent } from '../../gx-core/gx-textarea/gx-textarea.component';
import { GxButtonComponent } from '../../gx-core/gx-button/gx-button.component';
import { components } from '../../../gx-service/gx-component-mapper';
import { GxMapperService } from '../../../gx-service/gx-mapper.service';
import { IbukiService } from 'ibuki';
import { GxService } from '../../../gx-service/gx.service';

@Directive({
  selector: '[appGxDynamic]'
})
export class GxDynamicDirective implements OnInit {
  @Input() parent: FormGroup;
  @Input() layout: any;
  myComponents: any;
  component;
  constructor(
    private gxMapperService: GxMapperService
    , private gxService: GxService
    , private ibukiService: IbukiService
    , private resolver: ComponentFactoryResolver
    , private container: ViewContainerRef
  ) {
  }
  // sub;
  ngOnInit() {

    this.layout.id = this.layout.id || this.gxService.getCtrlId();
    this.layout.name = this.layout.name || this.layout.id;

    const component = this.gxMapperService.getMappedComponent(this.layout.type);
    const factory = this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.parent = this.parent;
    this.component.instance.layout = this.layout;
  }
}
