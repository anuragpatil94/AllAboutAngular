# ALL ABOUT ANGULAR

My notes from an Udemy Course and learning Markdown in detail with the course.

## Structure

- [Getting Started](#getting-started)
  - Angular Versions
  - Dependency Updates
  - What is Typescript?
  - my-frist-app
- The Basics
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

### Process To Run Code

To create new Application Folder : `ng new APPNAME`

Build source code and typescript : `ng serve`

To Change Port : `ng serve --port YOURPORT`

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

## Applications Built

1. my-first-app
