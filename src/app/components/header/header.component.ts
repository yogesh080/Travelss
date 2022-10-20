import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/googleAuth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  register(){
    this.auth.logout();
  }
}
