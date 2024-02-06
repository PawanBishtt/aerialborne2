
var more = document.querySelector('.main-right p a');
var less = document.querySelector('.main-right p span');

more.addEventListener('click',function(){
  less.style.display = 'inline';
  more.style.display = 'none';
})

less.addEventListener('click',function(){
  less.style.display = 'none';
  more.style.display = 'inline';

})





if (window.innerWidth > 600) {
  gsap.to('.main-left',{
    scrollTrigger:{
      trigger: '.main-left',
      start: 'top 2%',
      end: '+9999%',
      pin: true,
    }
  })
}
