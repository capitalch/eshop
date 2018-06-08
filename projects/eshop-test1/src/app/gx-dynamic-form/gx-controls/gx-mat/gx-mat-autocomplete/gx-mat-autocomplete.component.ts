import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { GxService } from '../../../gx-service/gx.service';
import { startWith, map, filter } from 'rxjs/operators';
import { IbukiService } from 'ibuki';

@Component({
  selector: 'app-gxmat-autocomplete',
  templateUrl: './gx-mat-autocomplete.component.html',
  styleUrls: ['./gx-mat-autocomplete.component.scss']
})
export class GxMatAutocompleteComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  options: any;
  myControl: AbstractControl;
  filteredOptions: any;
  constructor(private gxService: GxService, private ibuki: IbukiService) { }

  ngOnInit() {
    this.gxService.createGenericControl(this.layout, this.parent);
    this.myControl = this.parent.get(this.layout.name);
    const f = () => {
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(val => this.options
            .filter((opt: string) => opt.toLowerCase().includes(val.toLowerCase())))
        );
    };
    const sub = this.ibuki.filterOn(this.layout.id).subscribe(d => {
      f();
      sub.unsubscribe();
    });
    this.gxService.loadOptions(this);
    const a = this.options && (this.options.length > 0) && f();
  }

}
