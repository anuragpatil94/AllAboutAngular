import { Component } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"]
})
export class ActiveUsersComponent {
  // @Input() users: string[];
  count: number = 0;
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.count = this.usersService.getCountAI();
  }
}
