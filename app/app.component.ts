import {Component} from 'angular2/core';
import {LocationService} from './service';
import {Location} from './location';
import {CORE_DIRECTIVES} from 'angular2/common';
import {LocationDetailComponent} from './locationDetail';
import {LocationFilter} from './locationFilter';

@Component({
    selector: 'camp-app',
    templateUrl: './app/app.html',
    directives: [CORE_DIRECTIVES, LocationDetailComponent],
    pipes: [LocationFilter]
})
export class AppComponent {
    locationFilter: string = "";
    locations: Array<Location> = [];
    public selectedLocation: Location;
    
    constructor(private locationService : LocationService) {
        this.locationService.getLocations().subscribe(locations => this.locations = locations);
    }

    locationDetail(location:Location) {
        console.log(location.hotelName);
        this.selectedLocation = location;
    }
}; 