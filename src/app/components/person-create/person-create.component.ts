import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {
  person = {
    id : null,
    name: '',
    birth: '',
    available: false
  };
  submitted = false;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  createPerson(): void {
    const data = {
      id: this.person.id,
      name: this.person.name,
      birth: this.person.birth
    };

    this.personService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPerson(): void {
    this.submitted = false;
    this.person = {
      id: null,
      name: '',
      birth: '',
      available: false
    };
  }

}
