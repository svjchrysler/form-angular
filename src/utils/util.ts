import { Person } from '../models/person'

export class Util {
    static people = []

    savePerson(person: Person) {
        Util.people.push(person)
    }
}