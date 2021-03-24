document.addEventListener("DOMContentLoaded", () => {

    let burger = document.querySelector('.burger'),
        sideBar = document.querySelector('.sidebar'),
        body = document.querySelector('body'),
        dashboard = document.getElementById('js-dashboard'),
        popUp = document.querySelector('.js-btn'),
        modalWondow = document.querySelector('.js-popup'),
        closePopUp = document.querySelector('.js-close-btn');

        // get HTTP

        function getContent(cb) {

            let xhr = new XMLHttpRequest();
            xhr.open('get', 'js/data.json');
            xhr. addEventListener('load', () =>{
                if(xhr.status !== 200) {
                    console.log('Error', xhr.status);
                    return
                }
                
                let response = JSON.parse(xhr.responseText);
                
                cb(response);
               
            });
     
            xhr.send();
           
        };
        function onGetUsersCallBack(users) {
           
          if (!users.length){
              return;
          }
          renderUserList(users); 
        }

        // Rander User
        function renderUserList(users){
            let fragment = users.reduce(
                (acc, user) => acc + newTemplate(user), '');
                dashboard.insertAdjacentHTML('afterbegin', fragment);  
        }
        // Rander Template
        function newTemplate(user){
                return `
                <div class="cards">
                <div class="cards__info ${user.class}">
                    <div class="cards__social">
                    <svg class="icon">
                        <use xlink:href="#${user.class}"></use>
                    </svg>
                    </div>
                    <div class="cards__numbers">
                        <span class="cards__number">${user.number}</span>
                        <span class="cards__followers">${user.text}</span>
                    </div>
                    <div class="cards__place">
                    <span>${user.place}</span>
                    <svg class="icon">
                        <use xlink:href="#${user.arrow}-${user.rotate}"></use>
                    </svg>
                    </div>
                </div>
                <div class="cards__user">
                    <div class="cards__img"><img src="${user.image_url}" alt="" /></div>
                    <div class="cards__text">
                    <h4 class="cards__network">${user.social}</h4>
                    <h4 class="cards__mail">${user.mail}</h4>
                    </div>
                </div>
                </div>
        `
        }

    // Mobile Burger

        burger.addEventListener('click', function(){
            this.classList.toggle('burger--open');
            body.classList.toggle('overflow');
    
            if (sideBar.style.display == 'block'){
                
                sideBar.animate([
                    { transform: 'translate3D(0, 0, 0)' },
                    { transform: 'translate3D(0, -300px, 0)' }
                  ], {
                    duration: 1000,
                  })
                setTimeout(function(){
                    sideBar.style.display = 'none';
                }, 900);
                return;
            }
            sideBar.style.display = 'block';
            sideBar.animate([
                { transform: 'translate3D(0, -300px, 0)' },
                { transform: 'translate3D(0, 0, 0)' }
              ], {
                duration: 1000,
              })
        });

    //PopUp

    popUp.addEventListener('click', function () {
        modalWondow.classList.add('show');
        body.classList.toggle('overflow');
    });

    closePopUp.addEventListener('click', function () {
        modalWondow.classList.remove('show');
        body.classList.toggle('overflow');
    }); 
    
    getContent(onGetUsersCallBack);
});

