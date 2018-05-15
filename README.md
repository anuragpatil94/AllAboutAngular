# ALL ABOUT ANGULAR

My notes from an Udemy Course and learning Markdown in detail with the course.

Angular is a JS framework changing the DOM ('HTML') at runtime!.

## Structure

* [Getting Started](#getting-started)
  * Angular Versions
  * Dependency Updates
  * What is Typescript?
  * my-frist-app
* [The Basics](#the-basics)
  * How Angular App gets loaded
  * Components
  * Data Binding
  * Directives
* [Components and Databinding (Deep Dive)](#Components-and-Databinding)
  * Pass Data between Components
  * Custom Property Binding
  * Custom Event
* [Directives (Deep Dive)](#Directives)
  * Types of Directives
    * Attribute Directives
      * Custom Attribute Directives
        * Using HostListner
        * Using HostBinding
        * Binding to Directive Properties: Dynamically setting values from outside
    * Structure Directives
      * Custom Structural Directive
* [Services & Dependency Injection](#Services)
  * Hierarchical Injector
  * Cross-Component Communication through service using event-emitter
* [Routing](#Routing)
  * Link Routing
  * Paths
  * Button Routing
  * Routing with Params
  * Query Params
    * Passing queryParams using HTML
    * Passing queryParams Progammatically
    * queryParams Retrieving
    * Preserve queryParams to next route
  * App Routes Module
  * Route Guards
    * (Observable Used)
  * Accidental Navigation
    * (Observable Used)
  * Sending Static Data
  * Sending Dynamic Data
    * (Resolve Used)
* [Observables](#Observables)
* Forms
* Pipes
* Http
* Authentication
* Optimizations & NgModules
* Deployment
* Animations & Testing

---

## Getting Started

### Angular Versions

| Angular.js verisons | Angular Versions           |
| :-----------------: | :------------------------: |
| Angular.js          | Angular 2                  |
|                     | Angular 4                  |
|                     | `Angular 5(Latest)` &larr; |

### Dependency Updates

Updating NPM

> `npm install -g npm`

Updating CLI

> `npm uninstall -g angular-cli @angular/cli`
>
> `npm chache verify`
>
> `npm install -g @angular/cli`

### Process To Run Code and create a starting Template

To create new Application Folder : `ng new APPNAME`

Build source code and typescript : `ng serve`

Include the following import statement in the app.module.ts file

    import {FormsModule} from '@angular/forms';

Run on browser: `localhost:4200`

To Change Port : `ng serve --port YOURPORT`

Add Bootstrap : `npm install --save bootstrap@[VERSION]`

Make changes to `angular-cli.json` file to get `bootstrap` from Node Modules and path according to the `index.html` in `src` folder.
To Do this add a script in

```json
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ]
```

### Typescript

> Superset to JavaScript

Documentation : [Typescipt](http://www.typescriptlang.org/Handbook)

`npm install -g typescript`

Allows to write more Robust Code.
Doesn't run in Browser hence it is **complied to Javascript** in the end. This is handled by CLI.
Fast Computation.

Allows to assign a specific variable type to a variable like `string, boolean, number, Array<>, anything`. Also Access Modifiers like `private, public` and `static` methods. build `class`,`Interface`.

Running a Typescript code : `tsc FILENAME`

---

## The Basics

### How Angular App gets Loaded

Since Angular is a single page application, `index.html` is the only html page which is loaded and body is loaded in `<app-root>`, where _app-root is a root component_ of Angular.

app.component.ts in `src/app/` folder

* contains a `selector: 'app-root'` poperty which is how html is replaced in `index.html` `<app-root>`
* angular-cli injects some .js files (hence, not shown in index.js) to run the angular code.
* URL to template and css which is then loaded to `index.html`

main.ts

* is the 1st file which gets executed
* Here we check if we are in production mode or development mode
* From here it passes `AppModule` to a method, where `AppModule` which then refers to `app.module.ts` in `src/app/` folder.

app.module.ts

* Here the bootstrap array lists all the components which should be know to angular when analyzing `index.html`. Here one of the component is `AppComponent` which refers to `app.component.ts`. Hence, now the circle closes.

### Components

* app-component holds the entire application.
* we nest other component to app-component.
* So components in a webpage can be a seperate component for ( navbar, main content, side bar ). each component has its own html, business logic.
* _Reuse same components_ hence gets easier to build a website template.
* @Component should either have template which containg html code directly in ts file OR templatUrl to show path to a HTML file.
* Selector in component.ts works like a css selector

```HTML
  For Example:
  selector : 'app-server'   ----> <app-server></app-server>
  selector : '.app-server' works as a html class  ----> <div class='app-server' ></div>
  selector : '[app-server]' works as a html attribute  ----> <div app-server ></div>
```

New Component Manually

Create a new folder with html and ts file.
ts file will contain an import to components and then the @component object stating path to html file in TemplateUrl, css file and a Selector to be used in the HTML files.
update the app.module.ts file import the new component.ts file and add it to declarations.

New Component Using CLI

`ng generate component COMPONENTNAME`

Get the List of Properties which can be used in Angular -

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for `YOUR_ELEMENT properties or YOUR_ELEMENT events`.

### Data Binding

Server to HTML -

String Interpolation {{data}} - Use it to print some text

Property Binding [property]="data" - When to change property

HTML to SERVER (User Events) -
Event Binding (event)= "expression"

Two-way-Binding [(ngModel)] = "data"

For this you need to add `import { FormsModule } from '@angular/forms';` and `FormsModule` in imports Object in app.module.ts as shown

```TypeScript
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms'; // <=

  import { AppComponent } from './app.component';
  import { ServerComponent } from './server/server.component';
  import { ServersComponent } from './servers/servers.component';


  @NgModule({
    declarations: [
      AppComponent,
      ServerComponent,
      ServersComponent
    ],
    imports: [
      BrowserModule,
      FormsModule // <=
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

### Directives Basics

* These are the Instructions in the DOM.
* Components are a type of Directives.
* *ngIf ngStyle *ngFor

```Typescript
@Directive({
  selector:'[appTurnGreen]'
})

export class TurnGreenDirective{
}
```

```HTML
<p appTurnGreen>Receives a green background!</p>
```

## Components and Databinding

### Pass Data Between Components

#### Custom Property

`@Input('<alias>') <property_name>` to **_bind a element_** form outside (_Parent Component_ &rarr; _Child Component_)

Here the **_data flow_** is from _Parent Component_ &rarr; _Child Component_. This **property-name or alias** can be used by the component which is implementing the Selector for that component. Here [property-name] is a **_CUSTOM PROPERTY_**

For Example:

```HTML
<component-name [property-name or alias]='some_element in parent component'></component-name>
```

#### Custom Event

`@Output('<alias>') property-name = new EventEmitter< { serverName: string; serverContent: string; } >();`

The `@Output` Directive is used to emit collected data from child to parent component.

Here the **_data flow_** is from _Child Component_ &rarr; _Parent Component_. Hence any changes occuring in the childComponent (component-name) will be available using `$event`. which can then be used in AppComponent. Here (property-name) is a **_CUSTOM EVENT_**

For Example:

```HTML
<!-- (A property in child-component-name) = " A function in Parent Component " -->
<child-component-name
  (property-name)="onServerAdded($event)"
  (blueprintCreated)="onBlueprintAdded($event)"
  ></child-component-name>
```

### View Encapsulation

In Angular styles defined are based on component to component. That means a style defiend in componentA is not applied to componentB. Although this can be changed using a directive called **encapsulation**.

```typescript
@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated  <==
})
```

1.  encapsulation: ViewEncapsulation.Emulated &rarr; Default View Encapsulation
2.  encapsulation: ViewEncapsulation.None &rarr; The component which contains this, all the styles defiend in this component is applied **globally**. Unique angular selectors for styles in HTML is removed by this
3.  encapsulation: ViewEncapsulation.Native &rarr; It uses Shadow DOM. Gives same results as Emulated but this is not supported by many browsers hence not used.

### Ways to pass value to .ts file from .html file

#### Local Reference -

```HTML
<input type="text" class="form-control" #serverContentInput>


<button class="btn btn-primary" (click)="onAddServer(serverNameInput)">Add Server</button>
```

<!-- This is of type HTMLINPUTELEMENT after passing to the function-->

contains all the properties of input. can be used only in template not in the typescript files. Passing #serverContentInput to the function will pass the whole input tag.

#### Getting access before calling method -

THis can be done by adding a local reference in the HTML tag

```HTML
<input type="text" class="form-control" #serverContentInput>
```

and then accessing it in .ts file using a decorator `@ViewChild`.

```typescript
@ViewChild("serverContentInput") serverContentInput : ElementRef;
// This is of type ElementRef. Acceessing value nativeElement.value

onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
```

## Directives

**Command:** `ng generate directive <directive-name>` or `ng g d <directive-name>`

### Types of Directives

#### Attribute Directives

They are like attributes to the HTML tag. They work as a attribute to HTML tag, hence we cannot destroy the whole view. _Affects the element they are added to_.

1.  ngStyle
2.  ngClass

##### Custom Attribute Directive

```typescript
// basic-highlight.directive.ts

import { Directive, Renderer2, OnInit, ElementRef } from "@angular/core";

// [] for attribute style directive selector
@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // flags - adding !important to overwrite another styles
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "blue"
    );
  }
}

//declare the Directive class to the app.module.ts
```

Using HostListner():

```typescript
ngOnInit() {  }
  @HostListener("mouseenter")
  mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "blue"
    );
  }
  @HostListener("mouseleave")
  mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
```

Using HostBinding():

```typescript
export class BetterHighlightDirective implements OnInit {
  // Without using renderer
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener("mouseenter")
  mouseover(eventData: Event) {
    this.backgroundColor = "blue";
  }
  @HostListener("mouseleave")
  mouseleave(eventData: Event) {
    this.backgroundColor = "transparent";
  }
}
```

Binding to Directive Properties: Dynamically setting values from outside.

```typescript
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  // Without using renderer
  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor; //This removes the bug that the default color being transparent. this line overwrite the default color to <given color in html>
  }

  @HostListener("mouseenter")
  mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener("mouseleave")
  mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
```

```HTML
<!-- [highlightColor]="'red'" ,<- IMP -->
<p appBetterHighlight [defaultColor]="'yellow'" [highlightColor]="'red'">Style with better highlight</p>
<!-- <p appBetterHighlight [defaultColor]="'yellow'" highlightColor="red">Style with better highlight</p>   Can be written like this (property binding) -->
```

#### Structure Directives

They are same as attribute directives but also change the structure of DOM aound this element. Using ngIf the whole view can be removed. _Affects the view container_. \* is used to make sure anguler know that it is a structural directive and also not needed to use `ng-template` everytime, when structural directives are needed.

```HTML
<div *ngIf="!onlyOdd">
  <li *ngFor="let number of evenNumbers">
    {{number}}
  </li>
</div>

<!-- Either the above code or the following code (which is basically what * converts to behind the seen). Hence better to use *  -->
<ng-template ngIf="!onlyOdd">
<div>
  <ng-template ngFor="let number of evenNumbers">
  <li>
    {{number}}
  </li>
  </ng-template>
</div>
</ng-template>
```

##### Custom Structural Directive

```typescript
@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  // This Directive will work opposite to "if"
  // the property name here or the function name should be same as selector
  @Input()
  set appUnless(condition: boolean) {
    if (!condition) {
      //creates a view int the view container
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
```

1.  \*ngFor
2.  \*ngIf
3.  \*ngSwitch

> We cannot have more than 1 structural directives in an element.

## Services

With the use of service we can reduce the steps to exchange data (emit, catching of data in HTML using property-binding etc.[Check app.component.html, accounts.service.ts])

A sample logging service:

```typescript
//logging.service.ts
export class LoggingService {
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}

//account.component.ts
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { LoggingService } from "../logging.service";

@Component({
  providers: [LoggingService]
})
export class AccountComponent {
  constructor(private loggingService: LoggingService) {}

  onSetTo(status: string) {
    this.loggingService.logStatusChange(status);
  }
}
```

### Hirarchical Injector

AppModule - Same Instance of Service is available Application-wide. Hence it is not needed to put instance of service in the providers of child class.
AppComponent - Same Instance of Service is available for all components. Hence it is not needed to put instance of service in the providers of child class.
Any other Component - Same Instance of Service is available for the Component and all its child components.

[EXAMPLE : DATASERVICE]

### Cross-Component Communication through service using event-emitter

An example of service within service and Cross-Component Communication

```typescript
// accounts.service.ts
import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

//This is added so that we can inject services to other service.
//For Components since we used @Component to store metadata
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Testaccount",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];

  statusUpdated = new EventEmitter<string>();
  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}

//app.module.ts
@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {}

//account.component.ts
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
    // Emitting a event setted up in service
    this.accountsService.statusUpdated.emit(status);
  }
}

//new-account.component.ts
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
  }
}
```

## Routing

Routes are used to create a multi page application.

### Link Routing

```typescript
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path: ":id/:name",
        component: UserComponent
      }
    ]
  },
  {
    path: "servers",
    component: ServersComponent,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver }
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeativateGuard]
      }
    ]
  },
  // {
  //   path: "not-found",
  //   component: PageNotFoundComponent
  // },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page Not Found!" }
  },
  {
    path: "**",
    redirectTo: "/not-found"
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) //This gives router the routing functionality
  ]
})
export class AppModule {}
```

Use of `routerLink` - enables a click method that preventsDefault then redirects to a given path
Making `active` work.

```HTML
<ul class="nav nav-tabs">
  <li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
    <a routerLink="/">Home</a>
  </li>
  <li role="presentation" routerLinkActive="active">
    <a routerLink="/servers">Servers</a>
  </li>
  <li role="presentation" routerLinkActive="active">
    <a [routerLink]="['/users']">Users</a>
  </li>
</ul>
```

### Paths

```HTML
<a routerLink="/servers">Reload</a>
<!-- This will result in ABSOLUTE PATH. i.e.suppose currently localhost:4200/servers is loaded and calling the above route, will still load localhost:4200/servers-->
<a routerLink="servers">Reload</a>
<!-- This is a RELATIVE PATH which appends the given link to the url.
For Example: suppose currently localhost:4200/servers is loaded and calling above route will load localhost:4200/servers/servers rather than localhost:4200/servers-->
<a routerLink="./servers">Reload</a>
<!-- This is same as routerLink="servers"-->
<a routerLink="../servers">Reload</a>
<!-- This will GO BACK 1 step and then call /servers . suppose
localhost:4200/servers/user    is loaded then calling above route will load
localhost:4200/servers/servers-->
```

### Button Routing

```HTML
<button class="btn btn-primary" (click)="onLoadUsers()">Load Users</button>
```

```Typescript
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  onLoadUsers() {
    this.router.navigate(["/users"]);
  }

  //servers component
  onReload() {
    //Here relative path will not produce error because navigate doesn't know on which route it is.
    // this.router.navigate(["servers"]);

    //To make this relative. hence it will give error now.  i.e. it will go  for localhost:4200/servers/servers
    this.router.navigate(["servers"], { relativeTo: this.route });
    //This maybe useful when it routes to other links relatively
  }
```

### Routing with params

```ts
  //app module
  {
    path: "users/:id/:name",
    component: UserComponent
  }
  //user component
  import { Subscription } from "rxjs/Subscription";
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  ngOnInit() {
    //['id'] this we get from what we named the param in the route. This will only work for the 1st time. If a new link is called from /id/name page to another /id/name then it won't update the page. Hence we use subscribe which will update the data in the page.
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    };

    //This uses Route Observable. This works but angular handle the destoy and subscribe for this. hence we have to use onDestroy
     this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user = {
        id: params["id"],
        name: params["name"]
      };
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
```

### QueryParams

Passing queryParams using HTML

```HTML
 <a [routerLink]="['/servers',5,'edit']" [queryParams]="{allowEdit:'1'}" [fragment]="'loading'" class="list-group-item" *ngFor="let server of servers">
        {{ server.name }}
      </a>

<!-- http:// localhost:4200/servers/1/edit?allowEdit=1#loading  <-result -->
```

Passing queryParams using Programmatically

```ts
  //Home.component.ts
  // This can be used when using <button>
  onLoadServers(id:number) {
    this.router.navigate(["/servers",id,'edit'],{queryParams:{allowEdit:'1'}, fragment:'loading'});
  }

// http:// localhost:4200/servers/1/edit?allowEdit=1#loading    <-result
```

queryParams Retrieving

```ts
  ngOnInit() {
    // this.server = this.serversService.getServer(
    //   this.route.snapshot.params["id"]
    // );
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      // + is alternative way for typecasting from string to number
      this.server = this.serversService.getServer(+params["id"]);
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
```

Preserve queryParams to next route

```ts
this.router.navigate(["edit"], {
  relativeTo: this.route,
  queryParamsHandling: "preserve"   // <-
});
```

Page Not Found Route:

Create a new Component for this and assign a rounte in the app.module.ts
we can also use `{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }` to redirect to path matched completely.

```ts
  {
    path: "not-found",
    component: PageNotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/not-found"
  }
```

> Here the "\*\*" route should always be the last. It is a wildcard entry which will catch every other url

### App Routes Module

```ts
// app-routes.module.ts
const appRoutes: Routes = [...
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) //This gives router the routing functionality
  ],
  exports: [RouterModule]
})

//app.module.ts
@NgModule({
  imports: [AppRoutingModule],
})
```

### Route Guards

This is used during the check for authentication before routing to any page

```ts
// auth-guard.service.ts;
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(["/"]);
      }
    });
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

//auth.service.ts
// FAKE AUTH Service
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}

//App Routing
//This will prevent from accessing '/servers' without authentication
  //How to prevent from accessing only child Paths
 {
    path: "servers",
    component: ServersComponent,
    // canActivate: [AuthGuard],
    canActivateChild:[AuthGuard],
    children: [
      {
        path: ":id",
        component: ServerComponent
      },
      {
        path: ":id/edit",
        component: EditServerComponent
      }
    ]
  }
```

Login and Logout button (created in homepage) will call the login() and logout() functions in authService which will then change the local loogedIn variable to true or false. Once we navigate to servers page Its child nodes will call for isAuthenticate funtion mentioned in `canActivateChild:[AuthGuard]` in the authRoutes.

#### Accidental Navigation

Preventing the accidental navigation when users starts a form and accidentally navigates to other page without updating the form or submitting the form. using `canDeativate`

```ts
//CanComponentDeactivate
import { Observable } from "rxjs/Observable";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeativateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}

//AppRouting
 {
    path: ":id/edit",
    component: EditServerComponent,
    canDeactivate: [CanDeativateGuard]
  }

//EditServerComponent
export class EditServerComponent
  implements OnInit, OnDestroy, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false; // <-
  paramsSubscription: Subscription; // <-

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Retrieving Query Params 1 way. but will not work on any changes to the content of the page.
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    // 2nd way - best way
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams["allowEdit"] === "1" ? true : false;
    });
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params["id"]);
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    this.changesSaved = true; // <-
    this.router.navigate(["../"], { relativeTo: this.route }); // <-
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean { // <-
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm("Do you want to discard the changes?");
    } else {
      return true;
    }
  }
}
```

#### Sending Static Data

```ts
// Approuter
 {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page Not Found!" }
  }

//errorpagecomponent
  export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data["message"];
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data["message"];
    });
  }
}
```

#### Loading Dynamic Data

Here, while navigating to a page, if it is required to load the data before actually running the component `Resolve` is used

Resolve:

If the view of a component depends on content which has to be loaded via http, you have to manage a couple of things to make sure that there are no errors thrown as long as the data are not yet available, and that the view doesn't "flicker".

Especially if the same data are used in multiple components it can be useful to load them first by the Resolver and pass them in the data object to the components, and go to a component not before all data are available. The code in the components can then be synchronous.

If you foresee longer loading times, showing a spinner (conditionally with \*ngIf) and using the async pipe (section 17) would be the better alternative.

> Load the required data before completing the route for the component

```ts
//ServerResolver
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params["id"]);
  }
}

//AppRoutes
{
  path: ":id",
  component: ServerComponent,
  resolve: { server: ServerResolver }
}
```

## Observables

Read About [Promises vs Observables](https://medium.com/@mpodlasin/promises-vs-observables-4c123c51fe13)

Observable? It can be thought of as a data source such as (User Input) Events, HTTP Requests

It can - emit data when triggered to do so. programmatically or (click) button or HTTP Request, when a response is retured it can be emmited as a data package.

So there is Observable then a stream of Events and then Observer (to handle data,error and completion of the Observables) -> these are 3 types of data packages that can be received.

-> An Observable doesn't have to complete always.
-> Used to handle Asynchronous Tasks.

### Built-in Observables

* subscribe
* params

### Custom Observables

```ts
const myNumbers = Observable.interval(1000);
    myNumbers.subscribe((number: number) => {
      console.log(number);
    });
```

```ts
const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {observer.next("first package");}, 2000);
      setTimeout(() => {observer.next("second package");}, 4000);
      setTimeout(() => {
        // observer.error("Didnt Work");
        observer.complete();
      }, 5000);
      setTimeout(() => {observer.next("third package");}, 6000);
      setTimeout(() => {observer.next("fourth package");}, 3000);
    });

    myObservable.subscribe(
      (data: string) => {console.log(data);},
      (error: string) => {console.log(error);},
      () => {console.log("completed");}
    );

  /* OUTPUT
  (2sec)
  first package
  (1sec)
  fourth package
  (1sec)
  third package
  (1sec)
  completed
  */
```

subscribe will not stop even after changing a page unless unsubscribed.

Run the code: Consider the 1st observable, where the number is incremented every 1 second. Now even if page is changed the number is still incremented (hence a memory leak). therefore Unsubscribe

```ts
 ngOnDestroy() {
    this.numberObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
```

### Using Rxjs Subject to pass and listen to data

A subject is a Observer and Observable at the same time.

```ts
import { Subject } from "rxjs";

export class UsersService {
  userActivated = new Subject();
}
<!--  -->
//User Component
<!-- <button class="btn btn-primary" (click)="onActivate()">Activate!</button> -->
onActivate() {
    this.usersService.userActivated.next(this.id);
}

//AppComponent

export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.userActivated.subscribe((id: number) => {
      if (id === 1) {
        this.user1Activated = true;
      } else if (id === 2) {
        this.user2Activated = true;
      }
    });
  }
}
<!--  <a [routerLink]="['user', 1]">User 1 {{ user1Activated? '(activated)':'' }}</a>
      <a [routerLink]="['user', 2]">User 2 {{ user2Activated? '(activated)':'' }}</a>
 -->
```

Here `userActivated` in UserService acts as both Observable and Observer.

* **subscibing** the **userActivated** makes it a ***Observer*** in AppComponent. whereas it is also used in UserComponent to create an Observable by using **userActivated.next(this.id)**

### Observable Operators

Operators allows to transform the data received to something else and still stay inside the Observables

```ts
  //map is a operator which maps the data into new observables with any transformation
  //since operators return a new observables, it can chain to new operators
  const myNumbers = Observable.interval(1000).map((data: number) => {
    return data * 2;
  });
```

## Forms

There are 2 types of approaches to handle form: Template-Driven and Reactive

### Template-Driven

Angular infers the Form Object from the DOM

### Reactive

Form is created programmatically and Synchroniced with the DOM

---

## Applications Built

1.  my-first-app
2.  the-basics
3.  data-binding-and-components
4.  directives
5.  services
6.  routing

## Assignments

1.  basics assignment 1
2.  basics assignment 2
3.  basics assignment 3
4.  data binding assignment 1
