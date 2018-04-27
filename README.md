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
* Components & Databinding
  * Pass Data between Components
  * Custom Property Binding
  * Custom Event
* Directives
* Services & Dependency Injection
* Routing
* Observables
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

| Angular.js verisons |      Angular Versions      |
| :-----------------: | :------------------------: |
|     Angular.js      |         Angular 2          |
|                     |         Angular 4          |
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

### Directives

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

## Components and Databinding (Deep Dive)

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

## Directives (Deep Dive)

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

## Applications Built

1.  my-first-app
2.  the-basics

## Assignments

1.  basics assignment 1
2.  basics assignment 2
3.  basics assignment 3
4.  data binding assignment 1
