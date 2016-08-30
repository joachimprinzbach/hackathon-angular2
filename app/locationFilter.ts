import {Location} from './location';
import {Pipe, Injectable, PipeTransform} from "@angular/core";

@Pipe({
    name: 'locationFilter'
})
@Injectable()
export class LocationFilter implements PipeTransform {
    transform(locations: Array<Location>, searchString: Array<any>) : any {
        return locations;//.filter(location => location.hotelName.toLowerCase().includes(searchString[0].toLowerCase()));
    }
}
