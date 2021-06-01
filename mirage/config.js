export default function () {
  this.get('/decedents', (schema) => {
    return schema.decedents.all();
  });

  this.post('/decedents', (schema, request) => {
    let req = JSON.parse(request.requestBody).data.attributes;

    let attrs = {
      firstName: req['first-name'],
      lastName: req['last-name'],
      location: req['location'],
      nextOfKin: req['next-of-kin'],
      nokPhoneNumber: req['nok-phone-number'],
    };

    return schema.decedents.create(attrs);
  });
}
