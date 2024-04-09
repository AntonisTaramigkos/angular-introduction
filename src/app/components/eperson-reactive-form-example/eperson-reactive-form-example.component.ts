import { Component } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/person';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';




@Component({
  selector: 'app-eperson-reactive-form-example',
  standalone: true,
  
  imports: [EpersonReactiveFormComponent,
      PersonTableComponent,
      SimpleDatatableComponent
  ],
  templateUrl: './eperson-reactive-form-example.component.html',
  styleUrl: './eperson-reactive-form-example.component.css'
})
export class EpersonReactiveFormExampleComponent {
  currentPerson : EPerson;
  persons:EPerson[] = [];

  onPerson(person:EPerson){
    this.currentPerson = person
    this.persons.push(person)
  }

}
