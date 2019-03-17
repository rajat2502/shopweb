window.onscroll=function(){
  scroll();
}

function scroll(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
    document.getElementById("mybtn").style.display="block";
  }
  else{
    document.getElemtById("mybtn").style.display="none";
  }
}

function backtotop()
{
  document.body.scrollTop =0;
  document.documentElement.scrollTop=0;
}
