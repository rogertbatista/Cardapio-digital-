import { useState } from 'react';
import imgRestaurante from './assets/hashtaurante.webp';
import './App.css';
import {  Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

export function App() {

  const PaginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return <>
    <img src={imgRestaurante} alt="" className='capa'/>
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
    <div className="menu">
      {
        PaginasMenu[paginaSelecionada].map(prato => <ItemCardapio nome={prato.nome} preco={prato.preco} descricao={prato.descricao} imagem={prato.imagem} />)
      }
    </div>
    </>
}

