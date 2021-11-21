<<<<<<< HEAD
import { LightningElement, track, wire } from 'lwc';
=======
import { LightningElement, track } from 'lwc';
// import messageDemo from "@salesforce/messageChannel/messageDemo__c";
// import { MessageContext, publish } from "lightning/messageService";
>>>>>>> 18fd85594143566b7f88583066d2cfc1196711d6

export default class MessageLwc extends LightningElement {
    @track messages = []; // for arrray and object we need to use track decorator to track.

<<<<<<< HEAD
=======
    // @wire(MessageContext) msgContext;
>>>>>>> 18fd85594143566b7f88583066d2cfc1196711d6
    sendHandler() {
        const inputElement = this.template.querySelector("lightning-input");
        if (inputElement) {
            const msg = inputElement.value;
            this.messages.push({
                id: this.messages.length,
                value: msg,
                from: "LWC"
            });
<<<<<<< HEAD
            // publish message            
=======
            // publish message
            // const messagePayload = {
                // message: msg
            // }

            // publish(this.msgContext, messageDemo, messagePayload);
>>>>>>> 18fd85594143566b7f88583066d2cfc1196711d6
            // after publishing input element become empty
            inputElement.value = "";
        }
    }
}