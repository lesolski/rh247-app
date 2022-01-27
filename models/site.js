// ./models/site.js

class Site {
  constructor(id, client, ref, country, city, address, lat, lng, imageUri) {
    this.id = id;
    this.client = client;
    this.ref = ref;
    this.country = country;
    this.city = city;
    this.address = address;
    this.lat = lat;
    this.lng = lng;
    this.imageUri = imageUri;
  }
}

export default Site;
