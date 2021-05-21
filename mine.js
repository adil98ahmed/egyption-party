var x;
$(".details h4").click(function(){
    var index=$(".caption").length;
    var index2 = $(this).parent().index();
    console.log(index)
    
    $(".caption p:nth("+index2+")").slideToggle(500);
    for(var i=0;i<index;i++)
        {
            if(i!=index2)
                {
                    $(".caption p:nth("+i+")").slideUp(500);
                }
        }
          
})

$(".exit").click(function(){
    $(".menue").animate({left:"-200"},500)
    $(".open").animate({left:"0"},500);
    opens=0;
})


var flag=false;
var regEx="\^(?=.{1,100}$).*\gi";

$("#exampleFormControlTextarea1").keyup(function(){
    
    var text;
    text=document.getElementById("exampleFormControlTextarea1").value;
    var number=document.getElementById("number");
    var rem=document.getElementById("rem");

    
    if(flag==false)
        {
            if(text.length>=99)
        {
            number.innerHTML = "Invalid Text -> Extera charecters";
            rem.innerHTML = " ";
        }
    else
        {
            number.innerHTML = 99-text.length;
            rem.innerHTML = "remaining charecters"
        }
        }
    
    
    })
    



$(".menue a").click(function(){
    
    var ref=$(this).attr("href");
    var secOffset=$(ref).offset().top;
    $('body').animate({
              scrollTop: secOffset
            }, 500);
    console.log(secOffset);
    
})

var opens=0;
    $(".open").click(function(){
        
        if(opens==0)
            {
                $(".menue").animate({left:"0"},500);
                $(".open").animate({left:"200"},500);
                opens=1;
            }
        else
            {
                $(".menue").animate({left:"-200px"},500);
                $(".open").animate({left:"0"},500);
                opens=0;
            }
        
    })

function decrement()
{
    var dayInv=new Date();
    dayInv.setMonth(9);
    dayInv.setDate(10);
    dayInv.setHours(10);
    dayInv.setMinutes(0);
    dayInv.setSeconds(0)
    var currDate=new Date();
    
    var defMonth=dayInv.getMonth-currDate.getMonth()+1;
    var defDays=dayInv.getDate()-currDate.getDate();
    var defHoures=dayInv.getHours()-currDate.getHours();
    var defMinutes=dayInv.getMinutes()-currDate.getMinutes();
    var defSeconds=dayInv.getSeconds()-currDate.getSeconds();
    
    
    
    
    var days=document.getElementById("days");
    var houres=document.getElementById("houres");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    
    if(defDays<0)
        {
            defDays+=30;
            
        }
    if(defHoures<0)
    
        {
            defHoures+=24;
        }
    
    if(defMinutes<0)
        {
            defMinutes+=60;
        }
    if(defSeconds<0)
        {
            defSeconds+=60;
        }
    days.innerHTML = defDays+" D"
    houres.innerHTML = defHoures+" H"
    minutes.innerHTML = defMinutes+" M"
    seconds.innerHTML = defSeconds+" S"
}

setInterval(decrement,1000);