import {Location} from './location';
import {Pipe, Injectable, PipeTransform} from "@angular/core";

@Pipe({
    name: 'locationFilter'
})
@Injectable()
export class LocationFilter implements PipeTransform {
    transform(locations: Array<Location>, searchString: Array<any>) : any {
        let searchInput = searchString[0] ? searchString[0] : "";
        console.log(locations);
        console.log(searchString[0]);
        return locations.filter(location => location.hotelName.toLowerCase().includes(searchInput.toLowerCase()));
    }
}
