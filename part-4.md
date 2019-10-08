## Part 4: Interactivity

### Goal

Add interactivity to your map, to log information to the console when the user clicks the map, and (optionally) display a popup on the map when the user clicks one of your points.

### Instructions

In this step we'll add some custom click handling to `map.html` to make the map react to user clicks.

#### Add a click handler that logs to the console
- In `map.html`, add the following code to the bottom of your JS script (directly after the "Part 4 code will go here" comment):
  ```javascript
  map.on('click', (event) => {
    const clickedPoint = [event.lngLat.lng, event.lngLat.lat];
    console.log(JSON.stringify(clickedPoint));
  });
  ```
  This code extracts the longitude & latitude of the clicked point from the event object sent out by the map, and logs it to the console after converting it to a human-readable JSON string.
- Reload your `map.html` page in your browser, and open the JS console in your browser's Developer Tools (ask the facilitator if you can't find the Developer Tools).
- Click anywhere on your map, and you should see the longitude/latitude pair logged!

#### Log more information about the map's position
The user might change the map's zoom, pitch (tilt) and bearing (rotation), so let's log information about those settings as well.
- Update your handler code to wrap the `clickedPoint` and other map settings in a `location` object, and then log that object:
  ```javascript
  map.on('click', (event) => {
    const clickedPoint = [event.lngLat.lng, event.lngLat.lat];

    const location = {
      center: clickedPoint,
      zoom: map.getZoom(),
      pitch: map.getPitch(),
      bearing: map.getBearing(),
    };

    console.log(JSON.stringify(location, null, 2));
  });
  ```
- Reload `map.html` in the browser. Try changing the map zoom/pitch/bearing by scrolling, dragging, and right-click-dragging around the map. Click around and watch the log output change.

#### Re-center the map when the user clicks
The `.flyTo()` method lets us programmatically move the map to a certain location. Let's use it to re-center the map to wherever the user clicks.
- Add the line `map.flyTo(location);` to your handler code, just before the `console.log`. Your handler should now look like this:
  ```javascript
  map.on('click', (event) => {
    const clickedPoint = [event.lngLat.lng, event.lngLat.lat];

    const location = {
      center: clickedPoint,
      zoom: map.getZoom(),
      pitch: map.getPitch(),
      bearing: map.getBearing(),
    };

    map.flyTo(location);

    console.log(JSON.stringify(location, null, 2));
  });
  ```
- Reload your `map.html` page and try clicking somewhere off-center in the map. The map should move to bring the clicked point at the center.

#### Log the title & description if the user clicks a point from your custom layer
We can use the `.queryRenderedFeatures()` method to see if the point the user clicked corresponds to any feature(s) from a specific layer. Let's use it to conditionally log the `title` and `description` of your points if they are clicked.

- Replace the `console.log` line at the end of your handler with the following lines, using the name of your custom layer. (Not sure of the layer name? Look for it in the left sidebar of the Studio style editor.)
  ```javascript
  const clicked = {
    location: location
  };

  const clickedFeatures = map.queryRenderedFeatures(event.point, { layers: [ 'YOUR-LAYER-NAME-HERE']});

  if (clickedFeatures.length > 0) {
    clicked.title = clickedFeatures[0].properties.title;
    clicked.description = clickedFeatures[0].properties.description;
  }

  console.log(JSON.stringify(clicked, null, 2));
  ```


- Your handler code should now look like this:
  ```javascript
  map.on('click', (event) => {
    const clickedPoint = [event.lngLat.lng, event.lngLat.lat];

    const location = {
      center: clickedPoint,
      zoom: map.getZoom(),
      pitch: map.getPitch(),
      bearing: map.getBearing(),
    };

    map.flyTo(location);

    const clicked = {
      location: location
    };

    const clickedFeatures = map.queryRenderedFeatures(event.point, { layers: [ 'YOUR-LAYER-NAME-HERE']});

    if (clickedFeatures.length > 0) {
      clicked.title = clickedFeatures[0].properties.title;
      clicked.description = clickedFeatures[0].properties.description;
    }

    console.log(JSON.stringify(clicked, null, 2));
  });
  ```

#### [Optional] Display the title & description of a clicked point in a popup

Logging to the console is great, but it's only for us devs - most users would prefer the important info displayed on the map. Let's use a `mapboxgl.Popup` to display a point's title & description.

- Modify the `if` block in your handler code as follows, to add a `Popup` with the title & description if a user clicks one of the features from your layer:
  ```javascript
  if (clickedFeatures.length > 0) {
    clicked.title = clickedFeatures[0].properties.title;
    clicked.description = clickedFeatures[0].properties.description;

    const popup = new mapboxgl.Popup() // create the popup
      .setLngLat(clicked.location.center) // position it at the clicked point
      .setHTML('<h3>' + clicked.title + '</h3><p>' + clicked.description + '</p>') // add some HTML content
      .addTo(map); // place the popup on the map
  }
  ```
- The handler code in your `map.html` file should now look like the code in `map-completed.html`.
- Reload `map.html` in your browser and click on some points from your dataset to see the popups appear!


### Next step

[Part 5](./part-5.md)
