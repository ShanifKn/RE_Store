import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UtilsService } from 'src/app/shared/services/utils.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 're-store-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dropdownOpen: boolean = false;
  @Input() containerClass = 'container';

  wishCount = 0;

  constructor(
    public activeRoute: ActivatedRoute,
    public utilsService: UtilsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {}

  showLoginModal(event: Event): void {
    event.preventDefault();
    this.modalService.showLoginModal();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  selectLanguage(language: string) {
    this.dropdownOpen = false; // Close the dropdown
  }
}
