$(document).ready(function () {
    $("#search-form").submit((e) => search(e));
});

const search = function (e) {
    e.preventDefault();
    $.get(
        // endpoint url
        'https://itunes.apple.com/search',
        // data to send to the server
        {
            term: $('#search').val(),
            limit: 10,
        },
        // success function is called whenever the response happens,
        // the code does not wait for a response
        function(data){

            // data is the object that we see in postman
            $('#results')
                .empty()
             for(let i = 0; i < data.results.length; i++){
                 $('#results')
                     .append(`<hr><h3>${data.results[i]?.trackName} by ${data.results[i]?.artistName}</h3>`)
                     .append(`<text> Release Date: ${data.results[i]?.releaseDate}</text><br>`)
                     .append(   '<img src="' + data.results[i]?.artworkUrl100 + `"/>`)
                    .append(   '<audio type="audio/m4a" src="' + data.results[i]?.previewUrl + `" controls/>`)


             }
            //
            //
            //     // use defensive coding
            //     // don't assume anything
            //     if(data.items[i].volumeInfo.authors) {
            //         $('#results').append(`<p>By: ${data.items[i].volumeInfo.authors.join(', ')}</p>`);
            //     }
            //
            //     //if(data.items[i].volumeInfo.imageLinks && data.items[i].volumeInfo.imageLinks.thumbnail) {
            //     // ? says if the left side is null, don't evaluate the right side
            //     if(data.items[i].volumeInfo.imageLinks?.thumbnail) {
            //         $('#results').append(`<img src="${data.items[i].volumeInfo.imageLinks.thumbnail}" alt="Book Cover">`);
            //     }
            // }


            $('#results').append('Total Found: ' + data.results.length);
        },
        // expected data type
        'jsonp'
    );
}



