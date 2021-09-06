import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
// resource can have multiple js or css files.these functions are useful to load those files in our LWC.
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class SimpleLightBoxExample extends LightningElement {}
