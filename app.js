const url = "https://api.quotable.io/random";

function generateQuote() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var html = "";
      var quote = "";
      var author = "";
      quote = data.content;
      author = data.author;

      html +=
        "<div class='quote'><i class='fa fa-quote-right' aria-hidden='true' id='q'></i> " +
        quote +
        "<i class='fa fa-quote-right'></i></div>";

      html += "<div class='author'>" + author + "</div>";
      
      html += "<p><button class='btn btn-default'><a href='https://twitter.com/intent/tweet?text=" + quote + " -- " + author + " https://goo.gl/4Hecgs&hashtags=quotes' target='_blank' title='Tweet'><i class='fa fa-twitter' id='twitter'></i>Tweet</button></a></p>";
      
      $("#quote").html(html);
    });
}
