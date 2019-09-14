import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs } from "@angular/http";


@Injectable()
export class ApiService {

  constructor(private http: Http, ) { }

  getrepodetails(searchtxt: string): Promise<any> {
    return this.http
      .get('https://api.github.com/users/' + searchtxt + '/repos',
      )
      .toPromise()
      .then(res => this.getrepodetailsPost(res))
      .catch(res => this.returnGenericError(res.json()));
  }

  getrepodetailsPost(res) {
    console.log(res);
  }

  searchapi(searchtxt: string): Promise<any> {
    return this.http
      .get('https://api.github.com/search/users?q=' + searchtxt ,
      )
      .toPromise()
      .then(res => this.searchPost(res))
      .catch(res => this.returnGenericError(res.json()));
  }

  searchPost(res) {
    console.log(res);
  }

  returnGenericError(res) {
    return res;
  }
}
