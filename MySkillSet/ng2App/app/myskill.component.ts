import { Component, OnInit } from '@angular/core';
import { SkillAPIServiceProvider } from './services/SkillAPIServiceProvider';

@Component({
    selector: 'my-skill',
    templateUrl: './myskill.component.html',
    providers: [SkillAPIServiceProvider]
})

export class MySkillComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(private _dataService: SkillAPIServiceProvider) {
        this.message = "Hello from HomeComponent constructor";
    }

    ngOnInit() {
        this._dataService
            .GetAll()
            .subscribe(
            data => this.values = data,
            error => console.log(error),
            () => console.log('Get all complete')
            );
    }
}
