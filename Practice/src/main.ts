import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppModule} from './app/app.module'
import {ResumeModule} from './resume/resume.module'

const platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule)
platform.bootstrapModule(ResumeModule)