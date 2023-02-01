import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import { ResumeCompoment } from './resume.component'

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ResumeCompoment],
    bootstrap: [ResumeCompoment]
})

export class ResumeModule {}