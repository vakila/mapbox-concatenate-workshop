## Part 5: Creativity

### Goal

Create an interactive "scrollytelling" map to tell the story of your data.

![example story screen capture](scrollytelling/assets/glacierdemo.gif)

Examples:
- [My road to Concatenate](https://vakila.github.io/mapbox-concatenate-workshop/scrollytelling/example/anjana-concatenate/index.html)
- [Glaciers of Glacier National Park](https://vakila.github.io/mapbox-concatenate-workshop/scrollytelling/example/glacier/index.html)
- [Bicycle Infrastructure in Philadelphia](https://vakila.github.io/mapbox-concatenate-workshop/scrollytelling/example/bike-philly/index.html)


### Instructions

The `scrollytelling/` directory inside this repo contains a Mapbox Solution for journalists that makes it easier to create an interactive "scrollytelling" map. We'll customize that code to make our map.

- Open [`scrollytelling/config.js`](./scrollytelling/config.js) in your text editor, and follow the "TODO" comments to replace the placeholder text at the top with your own access token, style URL, title, byline, etc.
- In the same file, replace the data in `chapters` with data for the "chapters" (points) in your dataset.
  - Use your `map.html` file from the previous exercises to position the map zoom/bearing/pitch however you'd like for each point in your dataset, and click to log the data for that point/chapter to the console.
    - If you didn't finish your `map.html` file, you can also use [`scrollytelling/helper.html`](https://vakila.github.io/mapbox-concatenate-workshop/scrollytelling/helper.html) to get the position data.
  - Copy-paste the chapter data into `config.js`, following the example there.
  - [Important!] Add a unique `id` property to each chapter (e.g. `id: 'concatenate-lagos'`) following the example.
- In a new browser tab, open `scrollytelling/index.html`. Scroll to see your story unfold!


### Next step

[After this workshop](./#after-this-workshop)
