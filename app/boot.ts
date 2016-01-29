import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {LocationService} from './service';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [LocationService, HTTP_PROVIDERS]); 