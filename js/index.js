// Your code goes here
const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseenter', () => {
    headerImg.style.border = '2px solid gold';
    headerImg.src = 'https://images.unsplash.com/photo-1476611317561-60117649dd94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80';
})


const newBody = document.querySelector('body')
newBody.addEventListener('wheel',()=>{
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        newBody.style.background = bgColor;
        }

    random_bg_color();
})

const contentSection = document.querySelector('.content-section');
contentSection.addEventListener('click', () => {
    contentSection.style.backgroundColor = 'white';
    contentSection.style.padding = '2rem';
    contentSection.style.borderRadius = '1rem';
});

const adventureText = document.querySelector('.inverse-content .text-content');
adventureText.addEventListener('click', () => {
    adventureText.style.color = 'white';
})

const adventureImg = document.querySelector('.img-fluid');
adventureImg.addEventListener('mouseover', () => {
    adventureImg.style.transform = "scale(1.2)";
    adventureImg.style.transform = 'all 0.3s'
    adventureImg.src = 'https://images.unsplash.com/photo-1541261376025-872d4f4dd733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
})
adventureImg.addEventListener("mouseleave", () => {
    adventureImg.style.transform = "scale(1)";})


document.querySelectorAll('nav a').forEach(el =>{
    el.addEventListener('click', () => {
        el.style.transition = "color 0.5s";
        el.style.color = "#e62739";
    })
})

const logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', () => {
    logo.textContent = 'FUUUUUUUUUUUNNNNN!!!!';
    logo.style.color = 'goldenrod';
    logo.style.textShadow = '5px 5px 1px #ff0000, 10px 10px 1px #0000ff';
})

document.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault()
    alert ("We are the knights who say Ni!");
    event.stopPropagation();
  });


const para = document.querySelectorAll('body p').forEach(el =>{
    el.addEventListener('mouseover', (event) => {
        event.target.style.transform = 'all 1s'
        event.target.style.color = 'white';
    })
    el.addEventListener('mouseleave', (event) => {
        function random_bg_color() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
         
          
            el.style.color = bgColor;
            }
    
        random_bg_color();
    })
})

//Was trying to get this to work but couldn't quite get it...

// const headers = document.querySelectorAll('body h2').forEach(el =>{
//     el.addEventListener('click', (event) => {
//         event.target.filter = 'blur 5px'
//     })
// })


// console.log(headers);