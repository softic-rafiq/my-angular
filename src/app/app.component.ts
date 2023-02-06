import { Component } from '@angular/core';
import { MenuService } from './services/auth/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular';

  constructor(private menuService: MenuService) {
    console.log('first');
  }

  ngOnInit() {
    this.getMenus();
  }
  getMenus() {
    console.log('first');
    this.menuService.getMenu().subscribe(
      (resp) => {
        console.log('first', resp);
        // this.dataSource = new MatTableDataSource(resp);
        // this.users = resp;
        // this.loading = resp.loading;
      },
      (err) => {
        console.log('err,err', err);
      }
    );
  }
}
