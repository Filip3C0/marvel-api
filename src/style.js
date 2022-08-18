import styled from "styled-components";

export const Image = styled.img`
  width: 120px;
  height: 100px;
  margin-bottom: -30px;
`;
export const SearchNav = styled.div`
  display: flex;  
`
export const Input = styled.input`
  height: 40px;
  width: 200px;
  background-color: #fff;
  outline: none;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;
export const ButtonSearch = styled.button`
  cursor: pointer;
  background: red;
  color: #fff;
  width: 60px;
  height: 34px;
  border-radius: 5px;
  margin-left: 10px;

  &:hover{
    opacity: 0.9;
  }
  &:active{
    opacity: 0.7;
  }
`;

export const NavBar = styled.div`
  font-size: 3rem;
  display: flex;
  background-color: #202020;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10px 0;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 90px 0  0 0 ;
`;
export const CadHero = styled.div`
  background: #f00;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 190px;
  height: 280px;
  border-radius: 25px;
  margin: 0 60px 110px 0;
  -webkit-box-shadow: 7px 7px 21px 2px rgba(0, 0, 0, 0.27);
  box-shadow: 7px 7px 21px 2px rgba(0, 0, 0, 0.27);
 
`;
export const ImageHero = styled.img`
  width: 190px;
  height: 200px;
  border-radius: 25px;
  
`;
export const NameHero = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: #fff;
`;

export const DescHero =styled.p`
  font-size: 14px;
  text-align: justify;
  padding: 10px;
  background: #fff;


`

//-----------------Paginação--------------------------//
export const PaginationContainer = styled.div`
  display: flex;
  color: white;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #000;
    
  }
`
export const Pages = styled.div`
  padding: 10px;
`