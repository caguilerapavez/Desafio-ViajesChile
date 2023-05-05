// Scroll

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar-example",
  });
  
// Tooltips
  
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  