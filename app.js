
$(document).ready(function(){

  clickCount = 1;
  $("a.click").click(function(ev){
    // the following stops the click event from doing the default thing.   in this case visit the url
    ev.preventDefault()
    // the following stops subsequent functions from getting called
    ev.stopPropagation()
    incrementCountAndAlert()
    //return false;   is another way to stop subsequent javascript from executing from the click;  same as preventDefault & stopPropagation combined
    //                but if you have multiple returns in a function or have an exception it will call other events unexpectedly.
  })

  // having click events on top level elements is a bad idea.  Bind to classes
  $("a.some-other").click(function(ev){
    ev.preventDefault()
    ev.stopPropagation()
    alert("should show when they click 'some other action'")
  })

  incrementCountAndAlert = function(){
    var newCount = incrementCount()  // should be a function call, not a reference to the function
    alert("the count is " + newCount)
  }

  incrementCount = function(){
    clickCount +=1;  // shouldn't have var as that makes local scoped version of variable.  += 1 is also shorthand for incrementing
    return clickCount;
  }
});
