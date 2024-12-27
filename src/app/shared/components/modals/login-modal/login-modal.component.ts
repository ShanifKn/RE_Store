import { Component, OnInit } from '@angular/core';

@Component({
  selector: 're-store-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    let modal = document.querySelector('.login-modal') as HTMLElement;
    if (modal) modal.click();
  }
}
