
window.addEventListener('scroll', SetScrollVar);
window.addEventListener("resize", SetScrollVar);
function SetScrollVar(){
  const htmlElement= document.documentElement;
  const PercentOfScreenHightScrolled= htmlElement.scrollTop/ htmlElement.clientHeight;
  htmlElement.style.setProperty("--scroll", Math.min( PercentOfScreenHightScrolled * 100,100 ));
 
}
SetScrollVar(); 
const Observer= new IntersectionObserver(entries =>{
  for(let i = entries.length-1; i>=0 ;i-- ){
    const entry= entries[i];
    if(entry.isIntersecting){
      document.querySelectorAll('[data-img]').forEach(image=>{
        image.classList.remove('show');
      })
      const img = document.querySelector(entry.target.dataset.imgToShow)
      img?.classList.add('show');
      break
    }
  }
})

document.querySelectorAll('[data-img-to-show]').forEach(section =>{
  Observer.observe(section);
})
