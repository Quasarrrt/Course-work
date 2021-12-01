import React from "react";
import Catalog from "../components/Catalog/Catalog";

const CatalogPage = ({ tea, onCardClick, sortCards }) => {
  return <Catalog tea={tea} onCardClick={onCardClick} sortCards={sortCards} />;
};

export default CatalogPage;
