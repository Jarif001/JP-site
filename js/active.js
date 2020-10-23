function activeFunction(e) {
  if (document.querySelector('#link-parent a.active') !== null) {
    document.querySelector('#link-parent a.active').classList.remove('active');
  }
  e.target.classList.add('active');
}

document.getElementById('dhum').innerHTML = document.getElementsByClassName('nav-link')[1].className;