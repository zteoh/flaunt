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

// gradient
var grd = ctx.createLinearGradient(0,0,c.width,0);
var firstColor = ["#f7797d", "#ee9ca7", "#CF8BF3", "#ff6e7f", "#DCE35B", "#11998e", "#005AA7", "#314755", "#d4fc79", "#a6c0fe", "#a8edea", "#fef9d7", "#13547a", "#ffb199"]
var lastColor = ["#FBD786", "#ffdde1", "#FDB99B", "#bfe9ff", "#45B649", "#38ef7d", "#FFFDE4", "#26a0da", "#96e6a1", "#f68084", "#fed6e3", "#d299c2", "#80d0c7", "#ff0844"]
const num = Math.floor((Math.random() * firstColor.length));
grd.addColorStop(0, firstColor[num]);
grd.addColorStop(1, lastColor[num]);

// draw a static circle for tablets and smaller
if (window.innerWidth > 700) {
    container.addEventListener("mousemove", e => drawCircle(e.clientX, e.clientY));
} else {
    drawStaticCircle();
}

function drawCircle(x, y) {
    if (window.pageYOffset <= window.innerHeight + radius - y) {
        oldY = y
        y = oldY + window.pageYOffset;
        ctx.beginPath();
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
        ctx.fillRect(0, 0, project.width, project.height);
        context.fillStyle = 'rgba(255, 255, 255, 0.025)';
        context.fillRect(0, 0, project.width, project.height);

        ctx.moveTo(x, y);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0 , 2 * Math.PI);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.closePath();
        
        y = oldY - (window.innerHeight * 0.93 - window.pageYOffset);
        context.beginPath();
        context.fillStyle = 'rgba(255, 255, 255, 0.025)';
        context.fillRect(0, 0, project.width, project.height);

        context.fillStyle = grd;
        const angle = Math.random() * Math.PI
        context.ellipse(x, y, radius, radius * 0.5, angle, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    } else {
        y = y - (window.innerHeight - window.pageYOffset);
        context.beginPath();
        
        context.fillStyle = 'rgba(255, 255, 255, 0.025)';
        context.fillRect(0, 0, project.width, project.height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
        ctx.fillRect(0, 0, project.width, project.height);

        context.fillStyle = grd;
//            context.fillRect(20, y, project.width - 40, radius);
        const angle = Math.random() * Math.PI
        context.ellipse(x, y, radius, radius * 0.5, angle, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
//            console.log(x,y);
    }
}

function drawStaticCircle() {
    x = window.innerWidth / 2;
    y = window.innerHeight / 2;
    for (var i=0; i < 100; i++) {
        myX = x + (Math.random() * 200) - 100
        myY = y + (Math.random() * 200) - 100
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.125)';
        ctx.fillRect(0, 0, project.width, project.height);

        ctx.moveTo(x, y);
        ctx.beginPath();
        ctx.arc(myX, myY, radius, 0 , 2 * Math.PI);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.closePath();
    }
    
    for (var i=0; i < 100; i++) {
        myX = x + (Math.random() * 200) - 100
        myY = y + (Math.random() * 200) - 100
        context.beginPath();
        context.fillStyle = 'rgba(255, 255, 255, 0.125)';
        context.fillRect(0, 0, project.width, project.height);

        context.beginPath();
        context.fillStyle = grd;
        const angle = Math.random() * Math.PI
        context.ellipse(myX, myY, radius, radius * 0.5, angle, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }
}