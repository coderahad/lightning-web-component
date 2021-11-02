import TickerSymbol from '@salesforce/schema/Account.TickerSymbol';
import { LightningElement, track } from 'lwc';

export default class MessageLwc extends LightningElement {
    @track messages = []; // for arrray and object we need to use track decorator to track.

    sendHandler() {
        const inputElement = this.template.querySelector("lightning-input");
        if (inputElement) {
            const msg = inputElement.value;
            this.messages.push({
                id: this.messages.length,
                value: msg,
                from: "LWC"
            });
            // publish message
            // after publishing input element become empty
            inputElement.value = "";
        }
    }
}