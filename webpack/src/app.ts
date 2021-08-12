// /// <reference path = "components/project-input.ts"/>
// /// <reference path = "components/project-list.ts"/>
// '///' slash is special typescript command to import
import { ProjectInput } from "./components/project-input"
import { ProjectList } from "./components/project-list"

new ProjectInput()
new ProjectList('active')
new ProjectList('finished')


