function test() {

    /* data route */
  const url2 = "/api/fixed";
  d3.json(url2).then(function(response) {

    console.log(response);

  });

  const url3 = "/api/mobile";
  d3.json(url3).then(function(response) {

    console.log(response);

  });

  const url4 = "/api/geojson";
  d3.json(url4).then(function(response) {

    console.log(response);

  });

}

test();
console.log("it's running this file")