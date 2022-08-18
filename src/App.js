import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NavBar,
  Container,
  CadHero,
  ImageHero,
  NameHero,
  Image
} from "./style";
import Logo from './assets/marvel.svg'
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import { searchHeroe } from "./api";

const App = () => {
  const apiKey = "3b1b13b8c90730cee16db068ad41b84c";
  const itemsPerPage = 20
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [notFound, setNotFound] = useState(0);
//-------GET dos Personagens-----//
  useEffect(() => {
    axios
      .get(
       `https://gateway.marvel.com:443/v1/public/characters?limit=${itemsPerPage}&apikey=${apiKey}&offset=${itemsPerPage*pages}`
      )
      .then((response) => {
        setTotalPages(Math.ceil(response.data.data.total/ itemsPerPage))
        setCharacters(response.data.data.results);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [pages]);
console.log(characters);
//-------Paginação-------//
const onLeftClickHandler = () => {
  if(pages > 0){
    setPages(pages-1)
  }
}
const onRightClickHandler = () => {
    if(pages+1 !== totalPages){
      setPages(pages+1)
}}
//---------Busca------///
const onSearchHandler = async (hero) => {        
  if(!hero){
    return axios
    .get(
     `https://gateway.marvel.com:443/v1/public/characters?limit=${itemsPerPage}&apikey=${apiKey}&offset=${itemsPerPage*pages}`
    )
    .then((response) => {
      setNotFound(false)
      setTotalPages(Math.ceil(response.data.data.total/ itemsPerPage))
      setCharacters(response.data.data.results);
      console.log(response.data);
    })
    .catch((error) => console.log(error));
  }
    setNotFound(false)
    const result = await searchHeroe(hero)
    if(result.data.total === 0){
      setNotFound(true)
    }else{
      setCharacters([result.data.results[0]])
      setPages(0)
      setTotalPages(1)
    }
}
      
return (
    <>
     <NavBar>
       <a href="https://developer.marvel.com/" target="external" rel="_blank"><Image src={Logo} alt='Marvel Logo'/></a>
      <Pagination
        setPages={setPages}
        pages={pages+1}
        totalPages = {totalPages}
        onLeftClick = {onLeftClickHandler}
        onRightClick = {onRightClickHandler}
      />
      <SearchBar onSearch={onSearchHandler}/>
     </NavBar>
     {notFound ? (
        <h1>Héroi não encontrado</h1>
     ) : (
       <Container setPages={setPages}>
       {characters.map((hero) => (
         <CadHero key={hero.id}>
           <ImageHero
             src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
           />
           <NameHero>{hero.name}</NameHero>
          {/*<DescHero>{hero.description}</DescHero>*/}
         </CadHero>
       ))}
     </Container>
     )}
    </>
  );
}

export default App;
