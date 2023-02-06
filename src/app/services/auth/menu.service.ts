import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { GET_MENUS } from '../../apolloclient/query/getMenuQuery';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  error: any;

  constructor(private apollo: Apollo) {}

  // Get all users
  getMenu(): Observable<any> {
    return this.apollo
      .watchQuery<any>({
        query: GET_MENUS,
      })
      .valueChanges.pipe(
        map((result) => {
          console.log(result);
        })
      );
    // .valueChanges.pipe(map(result => result.data.getAllUsers))
  }
}
