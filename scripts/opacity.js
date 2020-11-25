window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 400) {
      document.getElementById('hline').style.opacity = -currScrollPos2 / 400 + 2;
    }
  }
);