import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people: any;
  currentPerson = null;
  currentIndex = -1;
  id = 0;
  name = '';

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.readPersons();
  }

  readPersons(): void {
    this.personService.getAll()
      .subscribe(
        people => {
          this.people = people;
          console.log(people);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readPersons();
    this.currentPerson = null;
    this.currentIndex = -1;
  }


  setCurrentPerson(person: any, index: any): void {
    this.currentPerson = person;
    this.currentIndex = index;
  }

  deletePerson(): void {
    this.personService.delete(this.id)
      .subscribe(
        response => {
          console.log(response);
          this.readPersons();
        },
        error => {
          console.log(error);
        });
  }

  searchById(): void {
    this.personService.searchById(this.id)
      .subscribe(
        people => {
          this.people = people;
          console.log(people);
        },
        error => {
          console.log(error);
        });
  }
}
