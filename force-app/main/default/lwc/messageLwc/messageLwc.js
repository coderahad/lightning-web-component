import { LightningElement, track } from 'lwc';
import messageDemo from "@salesforce/messageChannel/messageDemo__c";
import { APPLICATION_SCOPE, createMessageContext, MessageContext, publish, releaseMessageContext, subscribe, unsubscribe } from "lightning/messageService";

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