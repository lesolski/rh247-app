// ./models/site.js

class Site {
  constructor(id, client, ref, country, city, address, lng, lat, imageUri) {
    this.id = id;
    this.client = client;
    this.ref = ref;
    this.country = country;
    this.city = city;
    this.address = address;
    this.lng = lng;
    this.lat = lat;
    this.imageUri = imageUri;
  }
}

export default Site;

