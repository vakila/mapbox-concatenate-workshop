## Part 3: Display

### Goal

Use `mapbox-gl-js` to display your map in an HTML page.

### Instructions

This repository includes a [`map.html`](./map.html) file with a default style. In this step we'll customize that file to use your own style & access token.

- Open the file [`map.html`](./map.html) in your text editor.
- Read through the code & comments to see what it does.
- Add your Mapbox access token
  - Copy your access token:
    - Navigate to your Account page at [account.mapbox.com](https://account.mapbox.com)
    - Scroll down to "Access tokens"
    - Copy the default access token you see there
  - Paste the token into `map.html` as the value of `mapboxgl.accessToken`
- Add the Style URL for your new style
  - Copy your style URL:
    - Navigate to your Studio Styles page at https://studio.mapbox.com/styles
    - Click on the menu next to the style you made in the previous step to reveal its style URL.
    - Click the icon to copy the style URL
  - Paste the Style URL into `map.html` as the value of the map's `style` property
- Open the `map.html` file in your web browser and see your map!


### Next step

[Part 4](./part-4.md)
