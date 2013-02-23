
$(document).ready(function(){

  clickCount = 1;
  $("a.click").click(function(ev){
    incrementCountAndAlert()
  })

  $("a").click(function(ev){
    ev.preventDefault()
    ev.stopPropagation()
    alert("should show when they click 'some other action'")
  })

  incrementCountAndAlert = function(){
    var newCount = incrementCount
    alert("the count is " + newCount)
  }

  incrementCount = function(){
    var clickCount = clickCount + 1;
    return clickCount;
  }
});
