import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 're-store-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() accordionID: string;
  @Input() adClass: string;

  constructor() {}

  ngOnInit(): void {}
}
