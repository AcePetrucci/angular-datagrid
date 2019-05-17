import { Injectable } from '@angular/core';

import { map, tap } from 'rxjs/operators';

import { DatagridService } from 'src/app/core/services/datagrid.service';
import { normalizeDatagrid } from 'src/app/shared/normalizer/datagrid-content.normalizer';
import { addHeaders } from 'src/app/shared/normalizer/datagrid-headers.normalizer';

import { dataToExtract, customRenders } from './configurations/content/content-configuration';
import { defaultHeadersAndColumns } from './configurations/headers/headers-configuration';

@Injectable()

export class ExampleDatagridService {

  constructor(public datagridService: DatagridService) { }

  getDatagridListExample() {
    return this.datagridService.getDatagridListExample().pipe(
      map(datagridData => normalizeDatagrid(
        datagridData,
        dataToExtract,
        customRenders,
        addHeaders(defaultHeadersAndColumns(datagridData.length)),
      ))
    );
  }
}
