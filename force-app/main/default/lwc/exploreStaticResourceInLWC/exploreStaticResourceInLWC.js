import { LightningElement } from 'lwc';
import interest from '@salesforce/resourceUrl/calculatePrincipleInterest';
import { loadStyle,loadScript } from 'lightning/platformResourceLoader';

export default class ExploreStaticResourceInLWC extends LightningElement {

  renderedCallback(){
    loadScript(this, interest).then(()=>{
      const interest = mylib.calculatePrincipleInterest(4567);
      console.log(interest);
    }).catch((error)=>
      console.error(error)
    )
  }
}
