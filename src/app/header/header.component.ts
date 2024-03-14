import { Component } from '@angular/core';
import { Price } from '../price';
import { PlanSelectedService } from '../plan-selected.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedPlan: Price;

  constructor(private planSelected: PlanSelectedService) {
    // console.log("hello price")
    this.selectedPlan = this.planSelected.getSelectedPlan();
  }
}
