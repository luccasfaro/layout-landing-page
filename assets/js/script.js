// Menu Trigger
var menuNavUlList = document.querySelector('.menu-nav-bar ul');
var menuTrigger = document.querySelector('.menu-trigger');

function menuShow() {
   if (menuNavUlList.classList.contains('open')) {
      menuNavUlList.classList.remove('open');
   } else {
      menuNavUlList.classList.add('open');
   }
}

// Faq 
let faqs = document.querySelectorAll('.faq-box-item');

faqs.forEach(faq => {
   faq.onclick = () => {
      if(faq.classList.contains('active')) {
         faq.classList.remove('active');
      } else {
         faqs.forEach(subFaq => { subFaq.classList.remove('active')});
         faq.classList.add('active');
      }
   }
})

