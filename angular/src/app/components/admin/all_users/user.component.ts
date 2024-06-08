import { Component, OnInit } from "@angular/core";
import { MasterService } from "src/app/core/master.service";
@Component({
selector : 'app-users',
templateUrl : './user.template.html',
})
export class AllUsers implements OnInit {
userList: any [] =[];
constructor(private master: MasterService){}

ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips() {
    this.master.getAllUsers().subscribe((res:any)=>{
      this.userList = res.data;
    })
  }
}
