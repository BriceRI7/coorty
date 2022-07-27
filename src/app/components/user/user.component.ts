import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: User = new User();
  listUser: User[] = [];
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.userService.getAll().subscribe(response => {
      this.listUser=response;
    },
    error=>{
    
    })
  }

  delete(user:User){
    this.listUser=this.listUser.filter(obj =>{return obj !== user} );
  }
}
