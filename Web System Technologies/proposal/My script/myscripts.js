document.querySelector('a[href="#gotogallery"]').addEventListener('click', function(e) {
    e.preventDefault(); // prevent the default anchor link behavior
    const footer = document.getElementById('gotogallery');
    footer.scrollIntoView({ behavior: 'smooth' }); // scroll smoothly to the footer element
  });


  