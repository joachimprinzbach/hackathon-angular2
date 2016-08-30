import 'rxjs/add/operator/map';
import {Location} from './location';
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

@Injectable()
export class LocationService {
    constructor(private http: Http) {
    }

    getLocations() : Observable<Array<Location>> {
        return this.http.get("http://beta.json-generator.com/api/json/get/EJbRY1aIx")
            .map(res => <Array<Location>> res.json());
    }
}
