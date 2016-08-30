import {LocationService} from './service';
import {Location} from './location';
import {LocationFilter} from './locationFilter';
import {Component} from "@angular/core";

@Component({
    selector: 'camp-app',
    templateUrl: './app/app.html',
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
