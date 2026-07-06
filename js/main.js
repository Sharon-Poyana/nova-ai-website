document.addEventListener('DOMContentLoaded',function(){
  var burger=document.getElementById('burger');
  var nav=document.getElementById('nav');
  if(burger&&nav){burger.addEventListener('click',function(){nav.classList.toggle('open');});}
  if(nav){nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');});});}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
});
