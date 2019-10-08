var config = {
    style: 'YOUR_STYLE_URL', //TODO
    accessToken: 'YOUR_ACCESS_TOKEN', //TODO
    title: 'YOUR MAP TITLE', //TODO
    subtitle: 'YOUR MAP SUBTITLE', //TODO
    byline: 'By YOUR NAME', //TODO
    footer: 'Created at Concatenate Lagos 2019',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    chapters: [
        //TODO replace this data with data from the first point in your dataset
        {
            id: 'concatenate-lagos',
            title: 'Concatenate Lagos',
            description: 'A free conference for African developers with speakers from around the world.',
            location: {
              "center": [
                3.366639462826271,
                6.51635441424402
              ],
              "zoom": 11.805394255186213,
              "pitch": 33.499999999999986,
              "bearing": 136.79999999999995
            }
        },
        //TODO Copy-paste more chapters here - one for each point in your dataset!
    ]
};
