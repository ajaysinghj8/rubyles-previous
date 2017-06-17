interface Headers {
  [key: string]: string;
}

var mockResponse = {
  body: <any>null,
  headers: <Headers>{},
  append: function(key: string, value: string) {
    this.headers[key] = value;
  },
  json: function(data: any) {
    this.body = data;
  }
}

export default mockResponse;
