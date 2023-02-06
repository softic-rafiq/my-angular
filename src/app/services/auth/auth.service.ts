import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import {
  LOGIN_USER,
  REGISTER_USER,
} from 'src/app/apolloclient/mutation/RegisterUser';
import { GET_MENUS } from 'src/app/apolloclient/query/getMenuQuery';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: Observable<any[]> | undefined;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  // fruitForm: UserData = {
  //   id: 0,
  //   username: 'Rafiq',
  //   mobile: '01991166550',
  //   email: 'rafiq@softic.ai',
  // };
  // Get all users
  getUsers(): Observable<any> {
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

  //Register a user
  registerUser(data: any): Observable<any> {
    console.log('Data', data);
    return this.apollo.mutate({
      mutation: REGISTER_USER,
      variables: {
        password: data.password,
        mobile: data.mobile,
      },
    });
  }
  login(data: any): Observable<any> {
    console.log('Data', data);
    return this.apollo.mutate({
      mutation: LOGIN_USER,
      variables: {
        password: data.password,
        mobile: data.mobile,
      },
    });
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
