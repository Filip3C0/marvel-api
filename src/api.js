
export const searchHeroe = async (heroe) => {
    const apikey = '3b1b13b8c90730cee16db068ad41b84c'
    try{
        let url = `https://gateway.marvel.com:443/v1/public/characters?name=${heroe}&apikey=${apikey}`
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log("error:", error)
    }
}