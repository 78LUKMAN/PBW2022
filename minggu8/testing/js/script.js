

const header = document.getElementById('header'),
    navbar = document.getElementById('navbar'),
    footer = document.getElementById('footer');

const getFile = ["header.html", "nav.html", "footer.html"],
      el      = [header, navbar, footer];

for (let i = 0; i < getFile.length; i++) {
    fetch(getFile[i]).then(snap => snap.text()).then(res => {
      el[i].innerHTML = res;
    })
}
