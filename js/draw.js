//if (window.pageYOffset <= 600) {
    var container = document.getElementById("container");

    var c = document.getElementById("landingCanvas");
    c.width = window.innerWidth;     // equals window dimension
    c.height = window.innerHeight;
    var ctx = c.getContext("2d");
    var radius = 200;

    var project = document.getElementById("projectCanvas");
    project.width = window.innerWidth;     // equals window dimension
    project.height = window.innerHeight;
    var context = project.getContext("2d");
//    context.translate(0, 50);

    // Create gradient
    var grd = ctx.createLinearGradient(0,0,c.width,0);
    var firstColor = ["#f7797d", "#ee9ca7", "#CF8BF3", "#ff6e7f", "#DCE35B", "#11998e", "#005AA7", "#314755"]
//    var middleColor = ["#f7797d"]
    var lastColor = ["#FBD786", "#ffdde1", "#FDB99B", "#bfe9ff", "#45B649", "#38ef7d", "#FFFDE4", "#26a0da"]
    const num = Math.floor((Math.random() * firstColor.length));
    grd.addColorStop(0, firstColor[num]);
//    grd.addColorStop(0.5, middleColor[num]);
    grd.addColorStop(1, lastColor[num]);

//    if (window.pageYOffset <= 600) {
    container.addEventListener("mousemove", e => drawCircle(e.clientX, e.clientY))
   
    function drawCircle(x, y) {
    //    const x = Math.floor((Math.random() * c.width) + 1);
    //    const y = Math.floor((Math.random() * c.height) + 1)
        
        if (window.pageYOffset <= window.innerHeight * 0.9 - y) {
            oldY = y
            y = oldY + window.pageYOffset;
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
            ctx.fillRect(0, 0, project.width, project.height);

            ctx.moveTo(x, y);
            ctx.beginPath();
            ctx.arc(x, y, radius, 0 , 2 * Math.PI);
            ctx.fillStyle = grd;
            ctx.fill();
            ctx.closePath();
//            console.log(window.pageYOffset);
            
//            y = oldY - (window.innerHeight - window.pageYOffset);
//            context.beginPath();
//            context.fillStyle = 'rgba(255, 255, 255, 0.025)';
//            context.fillRect(0, 0, project.width, project.height);
//
//            context.moveTo(x, y);
//            context.beginPath();
//            context.arc(x, y, radius, 0 , 2 * Math.PI);
//            context.fillStyle = grd;
//            context.fill();
//            context.closePath();
        } else if (window.pageYOffset <= window.innerHeight * 0.9 - y) {
            y = y + window.pageYOffset;
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
            ctx.fillRect(0, 0, project.width, project.height);

            ctx.moveTo(x, y);
            ctx.beginPath();
            ctx.arc(x, y, radius, 0 , 2 * Math.PI);
            ctx.fillStyle = grd;
            ctx.fill();
            ctx.closePath();
//            console.log(window.pageYOffset);
        } else {
            
//            y = Math.floor((y - (window.innerHeight - window.pageYOffset))/(0.5*radius)) * 0.5 * radius;
            y = y - (window.innerHeight - window.pageYOffset);
            context.beginPath();
            context.fillStyle = 'rgba(255, 255, 255, 0.025)';
            context.fillRect(0, 0, project.width, project.height);

            context.beginPath();
            context.fillStyle = grd;
//            context.fillRect(20, y, project.width - 40, radius);
            const angle = Math.random() * Math.PI
            context.ellipse(x, y, 220, 150, angle, 0, 2 * Math.PI);
            context.fill();
            context.closePath();
//            console.log(x,y);
        }
    }

//} else {
//    console.log("YES")
//    var project = document.getElementById("projectCanvas");
//    project.width = window.innerWidth;     // equals window dimension
//    project.height = window.innerHeight * 0.9;
//    var context = project.getContext("2d");
//    var radius = 200;
//
//    // Create gradient
//    var grd = context.createLinearGradient(0,0,project.width,0);
//    grd.addColorStop(0,"#9796f0");
//    grd.addColorStop(0.5,"#f7797d");
//    grd.addColorStop(1,"#FBD786");
//
//    project.addEventListener("mousemove", e => drawCircle(e.clientX, e.clientY))
//
//    function drawCircle(x, y) {
//    //    const x = Math.floor((Math.random() * c.width) + 1);
//    //    const y = Math.floor((Math.random() * c.height) + 1)
//        context.beginPath();
//        context.fillStyle = 'rgba(255, 255, 255, 0.025)';
//        context.fillRect(0, 0, project.width * 2, project.height * 2);
//
//        context.moveTo(x, y);
//        context.beginPath();
//        context.arc(x, y, radius, 0 , 2 * Math.PI);
//        context.fillStyle = grd;
//        context.fill();
//        context.closePath();
//        console.log(window.pageYOffset);
//    }
//}