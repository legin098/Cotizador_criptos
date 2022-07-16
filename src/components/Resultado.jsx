import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

export const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="cripto" />
      <div>
        <Precio>
          The price is: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Highest price of the day: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Lowest price of the day: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Last update: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};
