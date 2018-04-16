# ALL ABOUT ANGULAR

My notes from an Udemy Course and learning Markdown in detail with the course.

Angular is a JS framework changing the DOM ('HTML') at runtime!.

## Structure

- [Getting Started](#getting-started)
  - Angular Versions
  - Dependency Updates
  - What is Typescript?
  - my-frist-app
- [The Basics](#the-basics)
  - How Angular App gets loaded
- Components & Databinding
- Directives
- Services & Dependency Injection
- Routing
- Observables
- Forms
- Pipes
- Http
- Authentication
- Optimizations & NgModules
- Deployment
- Animations & Testing

---

## Getting Started

### Angular Versions

|  Angular.js verisons  |      Angular Versions       |
| :-------------------: | :-------------------------: |
|  Angular.js           |  Angular 2                  |
|                       |  Angular 4                  |
|                       |  `Angular 5(Latest)` &larr; |

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

Since Angular is a single page application, `index.html` is the only html page which is loaded and body is loaded in `<app-root>`, where *app-root is a root component* of Angular.

app.component.ts in `src/app/` folder

- contains a `selector: 'app-root'` poperty which is how html is replaced in `index.html` `<app-root>`
- angular-cli injects some .js files (hence, not shown in index.js) to run the angular code.
- URL to template and css which is then loaded to `index.html`

main.ts

- is the 1st file which gets executed
- Here we check if we are in production mode or development mode
- From here it passes `AppModule` to a method, where `AppModule` which then refers to `app.module.ts` in `src/app/` folder.

app.module.ts

- Here the bootstrap array lists all the components which should be know to angular when analyzing `index.html`. Here one of the component is `AppComponent` which refers to `app.component.ts`. Hence, now the circle closes.

### Other Points

- app-component holds the entire application.
- we nest other component to app-component.
- So components in a webpage can be a seperate component for ( navbar, main content, side bar ). each component has its own html, business logic.
- *Reuse same components* hence gets easier to build a website template.
- @Component should either have template which containg html code directly in ts file OR templatUrl to show path to a HTML file.
- Selector in component.ts works like a css selector

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

## Applications Built

1. my-first-app
2. the-basics

## Assignments

1. basics assignment 1
