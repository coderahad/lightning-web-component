import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
// resource can have multiple js or css files.these functions are useful to load those files in our LWC.
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class SimpleLightBoxExample extends LightningElement {
    slLoaded = false;
    renderedCallback(){
      if(!this.slLoaded){
        Promise.all([
          loadStyle(this, `${SL}/simpleLightbox-master/dist/simpleLightbox.css`),
          loadScript(this, `${SL}/simpleLightbox-master/dist/simpleLightbox.js`)
        ]).then(()=>{
          this.slLoaded = true;
        }).catch((error) =>{
          console.error('Could not initialize light box -', error)
        });
      }
    }
}
