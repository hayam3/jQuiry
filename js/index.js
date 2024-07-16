/// <reference types="../@types/jquery" />

$('.openNav').on("click", function(){
    $('#leftMenu').animate({width:"250px"},500);
    $('.openNav').hide(100)
})

 $('.closebtn').on("click", function(){
    $('#leftMenu').animate({width:"0px"},500);
    $('.openNav').show(600)
 })

//  ======================
 $('#slider h3').on("click",function(){
    $(this).next().slideToggle();
    $("#slider div").not( $(this).next()).slideUp();
});
 
// =========================


var time= setInterval(()=>{


var timeNow= new Date().getTime()/1000;
var timeDown= new Date("2024-8-16").getTime()/1000;

var distance=timeDown-timeNow;

var days = Math.floor( distance / (24*60*60));
var hours = Math.floor((distance - (days * (24*60*60))) / 3600);
var mins = Math.floor((distance - (days * (24*60*60)) - (hours * 3600 )) / 60);
var secs = Math.floor((distance - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

displayTime(days.hours,mins,secs)

},1000)



function displayTime(days,hours,mins,secs) {
    
    var box=`
    <div  class="col-md-3 ">
    <div class="tim  my-5" >
        <span class="fs-3 fw-medium days ">${days} D</span>
   </div>
</div>

<div class="col-md-3">
    <div class="tim   my-5" >
        <span class="fs-3 fw-medium hours">${hours} h</span>
    </div>
</div>

<div  class="col-md-3">
    <div class="tim   my-5" >
        <span class="fs-3 fw-medium minutes">${mins} m</span>
      </div>
</div>

<div  class="col-md-3">
    <div class="tim   my-5" >
        <span class="fs-3 fw-medium seconds">${secs} s</span>
        </div>
</div>
    `
    document.getElementById("time").innerHTML=box;
}
// ====================================
$("textarea").on( "keyup",function () { 
    
    var textareaLength=$("textarea").val().length;
    var maxLength=100;
     
    var available =maxLength- textareaLength;
    if (available<=0) {
        $("#chars").text("your available character finished")
    }
     else{
        $("#chars").text(available)
     }

});