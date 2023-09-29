import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  loading: boolean = false;

  handleLoading(e: boolean) {
    this.loading = e;
  }

}
