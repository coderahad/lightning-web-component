import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationExample extends NavigationMixin(LightningElement) {
  openGoogle() {
    this[NavigationMixin.Navigate]({
      type: 'standard__webPage',
      attributes: {
        url: 'https://www.google.com'
      }
    });
  }
}
