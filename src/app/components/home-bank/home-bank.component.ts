import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-home-bank',
  templateUrl: './home-bank.component.html',
  styleUrls: ['./home-bank.component.scss'],
})

export class HomeBankComponent implements OnInit {

  name: string;

  constructor( public userService: UserService){

  }

  ngOnInit() {
    this.name = this.userService.user.name
  }

}
