## Part 5: Creativity

### Goal

Create an interactive "scrollytelling" map to tell the story of your data.

### Instructions

The `scrollytelling/` directory inside this repo contains a Mapbox Solution for journalists that makes it easier to create a beautiful "scrollytelling" map, something like this:

![example story screen capture](scrollytelling/assets/glacierdemo.gif)

- Open `scrollytelling/config.js` in your text editor, and follow the "TODO" comments to replace the placeholder text at the top with your own access token, style URL, title, byline, etc.
- In the same file, replace the data in `chapters` with data for the "chapters" (points) in your dataset.
  - Use your `map.html` file from the previous exercises to position the map zoom/bearing/pitch however you'd like for each point in your dataset, and click to log the data for that point/chapter to the console.
  - Copy-paste the chapter data into `config.js`, following the example there.
  - [Important!] Add a unique `id` property to each chapter (e.g. `id: 'concatenate-lagos'`) following the example.
- In a new browser tab, open `scrollytelling/index.html`. Scroll to see your story unfold!
