import { Component, Input } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AccountsService } from "../accounts.service";

// The Commented code was used when the services were not provided Application-wide

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
  // providers: [LoggingService] // Provided in app.module.ts
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);  //Removed due at providing global service in app.module.ts, Hence, injecting LoggingService to AccountsService

    // Emitting a event setted up in service
    this.accountsService.statusUpdated.emit(status);
  }
}
