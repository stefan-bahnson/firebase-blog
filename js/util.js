function parseResponseData(data) {
  return $.map(data, function(value, index) {
    value.id = index;
    return [value];
  });
}

function clearPosts() {
  $('.post').remove();
}