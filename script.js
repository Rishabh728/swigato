let fetchData = async (params) => {
    
    let fetch__ = await fetch('./data.json')
    let data = await fetch__.json();
    console.log(data)

    

}

fetchData()