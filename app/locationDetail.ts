import {Component} from 'angular2/core';
import {Location} from './location';

@Component({
    selector: 'location-detail',
    templateUrl: './app/locationDetail.html',
    inputs: ['location']
})

export class LocationDetailComponent {
    public location:Location;

}