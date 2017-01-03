import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Configuration } from './app.constants';
import { AppComponent } from './app.component';
import { MySkillComponent } from './myskill.component';

import { SkillAPIServiceProvider } from './services/SkillAPIServiceProvider';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,        
        HttpModule
    ],
    declarations: [
        AppComponent,
        MySkillComponent
    ],
    providers: [
        SkillAPIServiceProvider,
        Configuration
    ],
    bootstrap: [AppComponent, MySkillComponent],
})

export class AppModule { }