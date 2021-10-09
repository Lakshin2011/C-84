canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=121;
car1_height=71;
car1_x=11;
car1_y=11;
car1_img="https://postimg.cc/9rqYz9HM/car1.png";
car2_width=121;
car2_height=71;
car2_x=11;
car2_y=101;
car2_img="https://postimg.cc/tnnW1Kff/car2.png";
back_img="https://i.postimg.cc/bv5d35nK/racing.jpg";
function add() {
    back_canvas_img=new Image();
    back_canvas_img.src=back_img;
    back_canvas_img.onload=uploadbackground;
    car1_canvas_img=new Image();
    car1_canvas_img.src=car1_img;
    car1_canvas_img.onload=uploadcar1;
    car2_canvas_img=new Image();
    car2_canvas_img.src=car2_img;
    car2_canvas_img.onload=uploadcar2;
}
function uploadbackground() {
    ctx.drawImage(back_canvas_img,0,0,canvas.width,canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1_canvas_img,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2()
{
    ctx.drawImage(car2_canvas_img,car2_x,car2_y,car2_width,car2_height);
}