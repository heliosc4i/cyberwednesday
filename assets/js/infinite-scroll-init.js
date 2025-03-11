// Initialize infinite scroll on the container with ID "conference-list"
$(document).ready(function(){
  $('#conference-list').infiniteScroll({
    path: '.pagination a.next',
    append: '.conference',
    history: false,
    status: '.page-load-status',
    checkLastPage: true,
  });
});
