export default function (server) {
  server.db.loadData({
    decedents: [
      {
        firstName: 'Roger',
        lastName: 'Guin',
        location: 'East Atrium',
        nextOfKin: 'Derrick Guin',
        nokPhoneNumber: '555-555-5555',
        birthDate: Date.parse('09/06/1971'),
        deathDate: Date.parse('01/21/2021'),
      },
      {
        firstName: 'Barbara',
        lastName: 'Hughes',
        location: 'Cooler',
        nextOfKin: 'Kathy Pearline',
        nokPhoneNumber: '555-555-5555',
        birthDate: Date.parse('09/08/1953'),
        deathDate: Date.parse('01/22/2021'),
      },
      {
        firstName: 'John',
        lastName: 'Hill',
        location: 'Cooler',
        nextOfKin: 'Maggie Hill',
        nokPhoneNumber: '555-555-5555',
        birthDate: Date.parse('12/29/1957'),
        deathDate: Date.parse('01/21/2021'),
      },
    ],
  });
}
