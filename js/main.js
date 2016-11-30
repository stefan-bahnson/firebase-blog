$(document).ready(function () {
  getPosts();

  $(document).keypress( function(e) {
    if ( e.ctrlKey && ( e.which === 13 ) ) {
      $('#form').toggleClass('active');
    }
  })

});

function renderPosts(data) {

  var posts = parseResponseData(data);

  console.log(posts);

  clearPosts();

  posts.forEach(function (post) {
    var postElement = createPostElement(post);
    $('#posts').prepend(postElement);
  });

}

function createPostElement(post) {

  // create post container
  var postElement = $('<article class="post">');
  //
  // // create child elements for post container
  var titleElement = $('<h1>').text(post.title);
  var metaElement = $('<div class="meta">');
  var authorElement = $('<div class="date">').text(post.created);
  var dateElement = $('<div class="author">').text(post.author);
  var contentElement = $('<p>').text(post.content);

  metaElement.append(authorElement, dateElement);

  // insert all child elements into post container
  return postElement.append(
    titleElement,
    metaElement,
    contentElement
  );
}

function onFormSubmit(event) {
  event.preventDefault();

  var name = $('#name').val();
  var title = $('#title').val();
  var content = $('#content').val();

  createPost({
    title: title,
    content: content,
    created: moment().format('YYYY-M-D, HH:mm'),
    author: name
  });
}