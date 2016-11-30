$(document).ready(function () {
  getPosts();
  listenForKeypressCombination();
});

function renderPosts(data) {
  clearPosts();

  var posts = parseResponseData(data);

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

  $('#form-container').toggleClass('active');
  $('#post-form')[0].reset();
}

function listenForKeypressCombination() {
  $(document).keypress( function(e) {
    console.log(e.which);
    if ( e.ctrlKey && ( e.which === 13 ) ) {
      $('#form-container').toggleClass('active');
    }
  })
}