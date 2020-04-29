/* eslint-disable no-unused-vars */
function burgerSidebar(){
  const btn = document.getElementById('menu-toggle');
  const cls = { open: 'open', close: 'close' };
  const sidebar = document.getElementById('side');
  const body = document.getElementById('body');
  let btnClass = cls.open;
  btn.addEventListener('click', function(){
    if (btn.classList.contains(cls.open)) {
      btn.classList.remove(btnClass);
      btnClass = cls.close;
    } else if (btn.classList.contains(cls.close)) {
      btn.classList.remove(btnClass);
      btnClass = cls.open;
    }

    void btn.offsetWidth;
    btn.classList.add(btnClass);
    console.log(sidebar);
    sidebar.classList.toggle('dis-block');
    body.classList.toggle('grid');
  });
}
burgerSidebar();

/* Icons */
// const messagerIcon = document.getElementById('pop-messager');
const quitIcon = document.getElementById('pop-quit');
const profilIcon = document.getElementById('pop-profil');
/* Pops-up */
const  login = document.getElementById('login');
const quit = document.getElementById('quit');
/* Button */
const btnCancel = document.getElementById('btnCancel');
const btnQuit = document.getElementById('btnQuit');
function popupsLogin(){
  console.log(login);
  login.classList.add('up');
}
function popupsQuit(){
  quit.classList.add('up');
}
function popupsCancel(){
  login.classList.remove('up');
  quit.classList.remove('up');
}
// Pop-Ups Login


// Pop-ups Quit

// popUps();

function sidebarActive(){
  const sidebars = document.querySelectorAll('.sidebar-menu');
  for(let sidebar of sidebars){
    sidebar.addEventListener('click', function(event){
      event.preventDefault();
      const idSidebar = sidebar.getAttribute('id');
      const pages = document.querySelectorAll('.container');
      sidebar.classList.remove('side-click');
      for(let page of pages){
        page.classList.remove('active');
        const idPage = page.getAttribute('id');
        if(idSidebar == idPage){
          page.classList.add('active');
          sidebar.classList.add('side-click');
          console.log('I add:', idSidebar);
        } else {
          page.classList.remove('active');
          sidebar.classList.remove('side-click');
          console.log('I take:', idSidebar);

        }
      }
    });
  }
}
sidebarActive();
