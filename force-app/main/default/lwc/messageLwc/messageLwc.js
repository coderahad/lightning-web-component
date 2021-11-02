import { LightningElement, track } from 'lwc';

export default class MessageLwc extends LightningElement {
    @track messages = []; // for arrray and object we need to use track decorator to track.

    sendHandler() {
        const inputElement = this.template.querySelector("lightning-input");
        if (inputElement) {
            const msg = inputElement.value;
            // publish message
            // after publishing input element become empty
            inputElement.value = "";
        }
    }
}