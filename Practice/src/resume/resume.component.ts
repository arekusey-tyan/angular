import {Component} from '@angular/core'

@Component({
    selector: 'app-resume',
    template: `
    <div>
    <table>
    <tr><th>Name:</th><td>{{name}}</td><tr>
    <tr><th>Phone:</th><td>{{phone}}</td><tr>
    <tr><th>E-Mail:</th><td>{{email}}</td><tr>
    <tr><th>Land:</th><td>{{land}}</td><tr>
    <tr><th>Stage:</th><td>{{stage}}</td><tr>
    <tr><th>Skills:</th><td>{{skills}}</td><tr>
    <tr><th>Photo:</th><td id="photo"></td><tr>
    </table>
    </div>
    `
})

export class ResumeCompoment {
    name: string = "undefined"
    phone: string = "undefined"
    email: string = "undefined"
    land: string = "undefined"
    stage: number 
    skills: string[] = ["undefined"]
    photo: HTMLElement = null
}