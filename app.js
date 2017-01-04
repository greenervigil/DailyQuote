function refresh() {
  document.getElementById(".god-quote").onclick = displayDate;
};

$(document).ready(function() {
 $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    $(".god-quote").html(a[0].content + "<p>— " + a[0].title + "</p>")
  });
});
