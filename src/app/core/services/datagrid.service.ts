import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { datagridDatasource } from 'src/app/shared/mocks/datagridDatasource.mock';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DatagridService {
  constructor(private httpClient: HttpClient) { }

  public getDatagridListExample(): Observable<any> {
    return of(datagridDatasource).pipe(map(data => data));
  }
}
