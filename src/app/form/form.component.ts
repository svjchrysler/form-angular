import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { FormServiceService } from '../../services/form-service.service'
import { Util } from '../../utils/util'
import { Person } from '../../models/person'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormServiceService, Util]
})

export class FormComponent implements OnInit {

  @Input() model;
  submitted = false

  personForm: FormGroup;
  people: Person[] = []

  constructor(private formBuilder: FormBuilder,private serviceForm: FormServiceService) { }

  ngOnInit() {
     this.personForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, this.validateNumber]),
      email: new FormControl('', [Validators.required, this.validateEmail]) 
    })
  }

  validateDate(control: FormControl) {
    return null
  }

  validateNumber(control: FormControl) {
    let phone = control.value;
    if(isNaN(phone)) {
      return {
          value: "Telefono Invalido",
          state: false
      }
    }
    return null
  }

  validateEmail(control: FormControl) { 
    let email = control.value;
    let re = /\S+@\S+\.\S+/;
    
    if(!re.test(email)) {
      return {
          value: "Email Invalido",
          state: false
      }
    }
    return null
  }

  savePerson(e) {
    this.submitted = true
    
    let name = e.controls.name.value
    let lastName = e.controls.lastName.value
    let address = e.controls.address.value
    let birthday = e.controls.birthday.value.day + "-" + e.controls.birthday.value.month + "-" + e.controls.birthday.value.year
    let phone = e.controls.phone.value
    let email = e.controls.email.value

    let person = new Person(name, lastName, birthday, address, phone, email)
    this.serviceForm.savePerson(person)
    this.people = Util.people;

    this.personForm.reset()
    
  }

}
