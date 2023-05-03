import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent {

  stateOptions: any[] = [{ label: 'Ida e volta', value: 'idaevolta' }, { label: 'Somente ida', value: 'somenteIda' }];

  date: Date | undefined;

  value: string = 'idaevolta';
}
