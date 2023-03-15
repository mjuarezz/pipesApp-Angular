import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {RippleModule} from 'primeng/ripple';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    RippleModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
