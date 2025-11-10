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