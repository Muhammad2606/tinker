

  // navigation
  const navigation = document.querySelector('.navigation');
  const navbar = document.querySelector('.navbar__nav'),
        navbarLogo = document.querySelector('.navbar__logo'),
        nav = navbar.querySelectorAll('a'),
        navLogo = navbarLogo.querySelector('a');

    function showColor (){
        navigation.classList.add('navigation__add', 'fade');
        navigation.classList.remove('navigation__remove');
        nav.forEach((item) =>{
            item.style.color = 'black';
        });
        navLogo.style.color = 'black';
        
    }
    function hideColor (){
        navigation.classList.add('navigation__remove');
        navigation.classList.remove('navigation__add', 'fade');
        nav.forEach((item) =>{
            item.style.color = 'white';
        });
        navLogo.style.color = 'white';
    }

    function byScroll () {
        if(window.pageYOffset == 0 ){
            hideColor();
        }
        else{
            showColor();
        }
      }
      byScroll();
      window.addEventListener('scroll', byScroll);

      //portfolio

      const tabParent = document.querySelector('.gallery__contact'),
            tabs = document.querySelectorAll('.filter__tab'),
            tabsContent  = document.querySelectorAll('.showall');

            function hideTabContent (){
                tabsContent.forEach((item) =>{
                    item.classList.add('hide');
                    item.classList.remove('show','fade','grid');

                });
                tabs.forEach((item) =>{
                    item.classList.remove('tab__active');
                });

            }
   
            function showTabContent (i = 1){
                tabsContent[i].classList.add('show','fade','grid');
                tabsContent[i].classList.remove('hide');
                tabs[i].classList.add('tab__active');
            }
        hideTabContent();
        showTabContent();
            tabParent.addEventListener('click', (e) =>{
                const target = e.target;
                
                if(target && target.classList.contains('filter__tab')){
                    
                    tabs.forEach((item, idx) =>{
                        if(target == item){
                            hideTabContent();
                            showTabContent(idx);
                        }
                    })
                }
            });
         
  
            //slider
            const swiper = new Swiper('.swiper', {
                autoplay:{
                    delay:3000,
                    disableOnInteraction: false,
                },
                loop: true,
            
              });

            //   blog

              const blogTabParent = document.querySelector('.tabs__wrapper'),
                    blogTabs = blogTabParent.querySelectorAll('.tab'),
                    blogContent = document.querySelectorAll('.blog__img');
  
                    function hideBlogContent (){
                        blogContent.forEach((item) =>{
                            item.classList.add('hide');
                            item.classList.remove('show','fade');
                        });
                        blogTabs.forEach((item)=>{
                            item.classList.remove('tab__active')
                        });

                    }
               

                    function showBlogContent (i = 0){
                        blogContent[i].classList.add('show','fade');
                        blogContent[i].classList.remove('hide');
                        blogTabs[i].classList.add('tab__active');
                    }
                    hideBlogContent();
                    showBlogContent();

                    blogTabParent.addEventListener('click', (e)=>{
                        const target = e.target;
                        if(target && target.classList.contains('tab')){
                            blogTabs.forEach((item,idx) =>{
                                if(target == item){
                                    hideBlogContent();
                                    showBlogContent(idx);
                                }
                            });
                        }
                    });

                    // modal
                    const modal = document.querySelector('.modal'),
                          btnClose = document.querySelector('.close__modal'),
                          btn = document.querySelector('.openModal');

                          function hideModal () {
                            modal.classList.add('hide');
                            modal.classList.remove('show','slide-in-elliptic-top-fwd');
                          }
                          function showModal (){
                            modal.classList.add('show','slide-in-elliptic-top-fwd');
                            modal.classList.remove('hide');
                          }

                        btn.addEventListener('click', showModal);
                        btnClose.addEventListener('click', hideModal);


                        // add navbar 

                        const addNavbar = document.querySelector('.add__navbar'),
                              bars = document.querySelector('.fa-bars'),
                              addNavbarItem = addNavbar.querySelectorAll('a');

                      
                               bars.addEventListener('click', () =>{
                                addNavbar.classList.add('show','flicker-in-1');
                                addNavbar.classList.remove('hide');
                               });
                               
                              addNavbar.addEventListener('click', (Event) =>{
                                    if(addNavbar == Event.target){
                                    addNavbar.classList.add('hide');
                                    addNavbar.classList.remove('show','flicker-in-1'); 
                                }
                            });
                            addNavbar.addEventListener('click', (Event) =>{
                                addNavbarItem.forEach((item) =>{
                                    if(item == Event.target){
                                        addNavbar.classList.add('hide');
                                        addNavbar.classList.remove('show'); 
                                    }
                                });
                           
                        });
                           
                               