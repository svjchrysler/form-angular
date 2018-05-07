import { Injectable } from '@angular/core';

/* import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; */

import { Util } from '../utils/util'

import { Person } from '../models/person'
/* import { Util } from '../utils/util' */
import { Observable } from 'rxjs';


@Injectable()
export class FormServiceService {

  url: string = "localhost:3200/person"
  constructor(/* private http: Http */) { }

  savePerson(person: Person)/* :Observable<Object> */ {
    /* let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    return this
              .http
              .post(this.url, person, {search}) */
    /* let util = new Util()
    util.savePerson(person) */
    Util.people.push(person)
  }


}
