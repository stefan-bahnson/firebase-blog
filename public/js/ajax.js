function getPosts() {
  $.ajax({
    url: 'https://blog-33914.firebaseio.com/posts.json',
    type: 'GET',
    success: renderPosts,
    error: function (error) {
      console.log(error);
    }
  });
}

function createPost(post) {
  $.ajax({
    url: 'https://blog-33914.firebaseio.com/posts.json',
    type: 'POST',
    data: JSON.stringify(post),
    success: function (data) {
      getPosts();
    },
    error: function (error) {
      console.log(error);
    }
  });
}