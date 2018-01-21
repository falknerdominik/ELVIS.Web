import { Injectable } from '@angular/core';
import { ElectionService } from './../api/api/election.service';
import { User } from './../api/model/user';
import { Election } from './../api/model/election';
import { UserService } from '../api/api/user.service';
import { Community } from '../api/index';

@Injectable()
export class SettingsService {

  private basekey : string = 'settings';
  constructor(private electionService: ElectionService, private userService: UserService) { }

  reset() {
    sessionStorage.clear();
    this.electionService.getElectionById(1).subscribe(
      election => sessionStorage.setItem(`${this.basekey}-selectedelection`, JSON.stringify(election))
    )
    sessionStorage.setItem(`${this.basekey}-user`, JSON.stringify({"Username":"Guest","Email":"guest@gmail.com","Firstname":"Dominik","Lastname":"Not Logged In","UserType":1}));
  }

  getSelectedElection() : Election {
    return JSON.parse(sessionStorage.getItem(`${this.basekey}-selectedelection`)) as Election;
  }

  getUser() : User {
    return JSON.parse(sessionStorage.getItem(`${this.basekey}-user`)) as User;
  }

  setUser(user: User) {
    sessionStorage.setItem(`${this.basekey}-user`, JSON.stringify(user));
  }

  setUserDefinedCommunity(community: string) {
    const user = this.getUser();
    localStorage.setItem(`${this.basekey}-user-${user.Username}-home`, community);
  }

  getUserDefinedCommunity() : string {
    const user = this.getUser();
    return localStorage.getItem(`${this.basekey}-user-${user.Username}-home`);
  }
}
