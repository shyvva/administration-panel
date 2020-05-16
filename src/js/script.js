/* eslint-disable no-unused-vars */
function burgerSidebar() {
  const btn = document.getElementById('menu-toggle');
  const selectClass = { open: 'open', close: 'close' };
  const sidebar = document.getElementById('side');
  const body = document.getElementById('body');
  let btnClass = selectClass.open;
  btn.addEventListener('click', function () {
    if (btn.classList.contains(selectClass.open)) {
      btn.classList.remove(btnClass);
      btnClass = selectClass.close;
    } else if (btn.classList.contains(selectClass.close)) {
      btn.classList.remove(btnClass);
      btnClass = selectClass.open;
    }

    void btn.offsetWidth;
    btn.classList.add(btnClass);
    sidebar.classList.toggle('dis-block');
    body.classList.toggle('grid');
  });
}
burgerSidebar();

/* Icons */
const quitIcon = document.getElementById('pop-quit');
const profilIcon = document.getElementById('pop-profil');
/* Pops-up */
const login = document.getElementById('login');
const quit = document.getElementById('quit');
/* Button */
const btnCancel = document.getElementById('btnCancel');
const btnQuit = document.getElementById('btnQuit');
function popupsLogin() {
  console.log(login);
  login.classList.add('up');
}
function popupsQuit() {
  quit.classList.add('up');
}
function popupsCancel() {
  login.classList.remove('up');
  quit.classList.remove('up');
}

function sidebarActive() {
  const sidebars = document.querySelectorAll('.sidebar-menu');
  for (let sidebar of sidebars) {
    sidebar.addEventListener('click', function (event) {
      event.preventDefault();
      const idSidebar = sidebar.getAttribute('id');
      const pages = document.querySelectorAll('.container');
      sidebar.classList.remove('side-click');
      for (let page of pages) {
        const idPage = page.getAttribute('id');
        if (idSidebar == idPage) {
          page.classList.add('active');
          sidebar.classList.add('side-click');
        } else  {
          page.classList.remove('active');
          sidebar.classList.remove('side-click');
        }
      }
    });
  }
}
sidebarActive();

const ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line no-undef
const chart = new Chart(ctx, {

  type: 'bar',
  data: {

    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],

    datasets: [{

      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',

      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      // 7
      hidden: true,
    }]
  },

  options: {
    responsive: true,
  }

});
