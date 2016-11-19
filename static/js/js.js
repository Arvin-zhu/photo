window.onload=function () {
    hengshuping();
    $(".zhu").on("click",function () {
        $(".detail").fadeIn(500);
    })
    $(".detail").on("click",function () {
        $(".detail").fadeOut(500);
    })
}
function hengshuping(){
    if(window.orientation==180||window.orientation==0){
        $("body").css("display","none");
        alert("请切换成横屏才能更好的查看哦！")
    }
    if(window.orientation==90||window.orientation==-90){
        $("body").css("display","block");
    }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
