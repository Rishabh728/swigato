

let fetchData = async (params) => {
    
    let fetch__ = await fetch('./data.json')
    let data = await fetch__.json();
    console.log(data)

    let grid = document.getElementById('grid');
    
    data.filter((item) => {
        return
    }).map(() => {
        let article = document.getElementById('article');
        grid.append(article);
        
    })


}

fetchData()


let sliderData = [
    './assets/banner1.avif',
    './assets/banner2.webp',
    './assets/banner3.jpg',
    './assets/banner4.jpg'
]

let hero = document.getElementById('hero');


    let article = document.createElement('article');
hero.append(article);
article.setAttribute('class', 'articleSlider');

let i = 0;

setInterval(() => {
  article.style.backgroundImage = `url(${sliderData[i]})`;
  article.style.backgroundPosition = 'center';
  i = (i + 1) % sliderData.length;
}, 2000);



    


