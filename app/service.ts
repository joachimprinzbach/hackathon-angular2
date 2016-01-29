import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Location} from './location';

@Injectable()
export class LocationService {
    constructor(private http: Http) {
    }

    getLocations() : Observable<Array<Location>> {
        return this.http.get("http://localhost:1337/locations")
            .map(res => <Array<Location>> res.json());
    }
}