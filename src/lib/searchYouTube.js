var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    type: 'video',
    maxResults: max,
    part: 'snippet',
    videoEmbeddable: 'true',
    key: key,
    q: query
  })
    .done(function({items}) {
      if (callback) {
        callback(items);
      }
    })
    .fail(function({responseJSON}) {
      responseJSON.error.errors.forEach(function(err) {
        console.error(err);
      }
      );
    });
};

export default searchYouTube;
