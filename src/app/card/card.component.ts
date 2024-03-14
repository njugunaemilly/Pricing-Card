import { Component } from '@angular/core';
import { Price } from '../price';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  isToggled: boolean = false;

  prices : Price []=  [
    {
      product: "Starter",
      monthly: "$19",
      annually: "$228",
      features: [
        "500 MAUs",
        "3 projects",
        "Unlimited guides",
        "Unimited flows",
        "Unlimited branded themes",
        "Email support",
      ],
      submitMessage: "You selected the Starter plan!",
    },
    {
      product: "Pro",
      monthly: "$99",
      annually: "$1188",
  
      features: [
        "All starter features, plus:",
        "Unlimited projects",
        "Unlimited fully customizable themes",
        "A dedicated Customer Success manager",
      ],
      submitMessage: "You selected the Pro plan!",
      proOption:"2500"
    },
    {
      product: "Enterprise",
      monthly: "Let's Talk!",
      annually: "Let's Talk!",
      features: [
        "All pro features",
        "Unlimited MAUs",
        "Dedicated environment",
        "Enterprise account administration",
        "Premium support and services",
      ],
      submitMessage: "You selected the Enterprise plan!",
    },
  ];

  planTogglee(event: boolean){
    this.isToggled = event
  }
}
