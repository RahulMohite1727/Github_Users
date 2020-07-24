import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable()
export class GithubService {
   private userName = 'rahulmohite1727';


   constructor(private httpClient: HttpClient) {


   }
   getUser() {
      return this.httpClient.get('https://api.github.com/users/' + this.userName).pipe(map(res => res));
   }

   getRepos() {
      return this.httpClient.get('https://api.github.com/users/' + this.userName)
         .pipe(map(res => res));
   }
   getAllUsers() {
      return this.httpClient.get('https://api.github.com/users')
   }
   getUserRepo(userNm) {
      return this.httpClient.get(`https://api.github.com/users/${userNm}/repos`)
   }
   updateUser(userName: string) {
      this.userName = userName;

   }

}
