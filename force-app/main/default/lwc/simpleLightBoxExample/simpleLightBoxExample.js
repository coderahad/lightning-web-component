import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
// resource can have multiple js or css files.these functions are useful to load those files in our LWC.
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class SimpleLightBoxExample extends LightningElement {
    // customImage = SL+'/simpleLightbox-master/demo/images/1big.jpg';
    customImage = SL+'/simplelightbox/simpleLightbox/demo/images/1big.jpg';
    slLoaded = false;
    renderedCallback(){
      if(!this.slLoaded){
        Promise.all([
          // loadStyle(this, SL+'/simpleLightbox-master/dist/simpleLightbox.css'),
          // loadScript(this, SL+'/simpleLightbox-master/dist/simpleLightbox.js')
          loadStyle(this, SL+'/simplelightbox/simpleLightbox/dist/simpleLightbox.css'),
          loadScript(this, SL+'/simplelightbox/simpleLightbox/dist/simpleLightbox.js')
        ]).then(()=>{
          this.slLoaded = true;
          console.log('files loaded');
        }).catch((error) =>{
          console.error('Could not initialize light box -', error)
        });
      }
    }

    openGallary(){
      SimpleLightbox.open({
        items: ['/resource/cars/van/maruti_suzuki_eeco.jpg', '/resource/cars/luxury/mercedes_benz_gls.jpg']
      });
      // SimpleLightbox.open({
      //   items: ['/simpleLightbox-master/demo/images/1big.jpg', '/simpleLightbox-master/demo/images/2big.jpg', '/simpleLightbox-master/demo/images/3big.jpg']
      // });
    }
}
