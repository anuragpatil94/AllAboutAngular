import { Component } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AccountsService } from "../accounts.service";
@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"]
  // providers: [LoggingService] // Provided in app.module.ts
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    //This is to get the emitted data from AccountComponent to newAccountComponent
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert("New Status: " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus); //Removed due at providing global service in app.module.ts, Hence, injecting LoggingService to AccountsService
  }
}
