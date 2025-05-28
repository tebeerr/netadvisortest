import { Component, OnInit} from '@angular/core';
import {PagesModule} from "../../../pages.module";

@Component({
  selector: 'app-devis-list-container',
  templateUrl: './devis-list-container.component.html',
  styleUrls: ['./devis-list-container.component.scss'],
  imports: [PagesModule],
  standalone: true
})
export class DevisListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
