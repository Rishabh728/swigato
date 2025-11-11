let fetchData = async () => {
  let res = await fetch('./data.json');
  let data = await res.json();
  console.log(data);

  let grid = document.getElementById('grid');
    grid.innerHTML = ''; // clear previous content
    
    let old = 0;
    let newnum = 6;
    function showData(old, newNum) {
        data
    .filter(item => item.category === 'restro').slice(old,newnum)
    .forEach(item => {
      let article = document.createElement('article');
      article.classList.add('rest-card');

      article.innerHTML = `
        <div class="rest-media">
          <img src="${item.url}" alt="${item.name}">
          <div class="badge">
            <img src="${item.icon || './assets/default-icon.png'}" 
                 alt="badge" 
                 style="width:56px;height:56px;border-radius:50%;object-fit:contain">
          </div>
        </div>
        <div class="rest-body">
          <h3>${item.name}</h3>
          <p>${item.alt}</p>
        </div>
      `;

      grid.appendChild(article);
    })
    }
    showData(old, newnum);
    let loadbtn = document.getElementById("load-button")
    loadbtn.addEventListener('click', () => { 
        old = newnum;
        newnum += 6
        showData(old, newnum);
    })

};

fetchData();



// ! slider card

let sliderData = [
  './assets/banner1.avif',
  './assets/banner2.webp',
  './assets/banner3.jpg',
  './assets/banner4.jpg'
];

let hero = document.getElementById('hero');
let article = document.createElement('article');
article.className = 'articleSlider';
hero.append(article);


let i = 0;
setInterval(() => {
  article.style.backgroundImage = `url(${sliderData[i]})`;
  article.style.backgroundPosition = 'center';
  article.style.backgroundSize = 'cover';
  article.style.transition = 'background-image 1s ease';
  i = (i + 1) % sliderData.length;
}, 2000);

// ! dayNight
let dayNight = document.getElementById('dayNight');
let body = document.getElementById('body');
let pill = document.querySelectorAll('.pill');

dayNight.addEventListener('click', () => {
  body.classList.toggle('dark');
  hero.classList.toggle('hero_dark');

  for (let btn of pill) {
    btn.classList.toggle('dayNight__');
  }
});

//! popup signIn


let signIn = document.getElementById('signIn');

// Create blur overlay
let overlay = document.createElement('div');
overlay.classList.add('overlay');
overlay.style.display = 'none';
body.append(overlay);

// Create popup container
let div = document.createElement('div');
div.classList.add('set-pop-up');
div.style.display = 'none';
body.append(div);

// Add popup HTML
div.innerHTML = `
  <div class="pop-up">
    <button id="close">✕</button>
    <h2 class="h2">Sign In</h2>
    <form id="signInForm">
      <input type="text" placeholder="Username" required>
      <input type="password" placeholder="Password" required>
      <button type="submit" id="submitBtn">Login</button>
    </form>
  </div>
`;

let close = div.querySelector('#close');

// Open popup
signIn.addEventListener('click', function () {
  overlay.style.display = 'block';
  div.style.display = 'flex';
});

// Close popup
close.addEventListener('click', function () {
  overlay.style.display = 'none';
  div.style.display = 'none';
});

//! input data track

let inputNav = document.getElementById('inputNav');


inputNav.addEventListener('input', function () {
    console.log(inputNav.value)

    

    
})
