import { useEffect, useState } from "react";

export default function useCarrinho() {
  const [carrinho, setCarrinho] = useState([]);

  const localStorageKey = "carrinho"; //Local Storage salva os dados na memória do navegador

  useEffect(() => {
    salvarCarrinho();
  }, [carrinho]);

  useEffect(()=>{
    carregarCarrinho();
  },[])

  function addCarrinho(item) {
    for (const produto of carrinho) {
      if (item.idProduto === produto.idProduto) {
        item.quantidade += produto.quantidade;
        item.valorTotal += produto.valorTotal;
      }
    }

    const novoCarrinho = carrinho.filter((produto) => {
      return item.idProduto !== produto.idProduto;
    });

    novoCarrinho.push(item);
    setCarrinho(novoCarrinho);
  }

  const criarCarrinho = (item) => {
    const addItem = {
      idProduto: item.id,
      nome: item.nome,
      valor: item.valor,
      valorTotal: item.valor,
      quantidade: 1,
    };

    addCarrinho(addItem);
  };

  const handleRemoverProd = (id) => {
    const novaLista = carrinho.filter((card) => card.idProduto !== id);
    setCarrinho(novaLista);
    if (novaLista.length === 0) {
        localStorage.removeItem(localStorageKey)
    }
  };

  const somaCarrinho = () => {
    const total = carrinho.reduce((soma, item) => soma + item.valorTotal, 0);
    return total;
  };

  const editQuantCarrinho = (idItem, quantItem) => {
    if (quantItem <= 0) {
      handleRemoverProd(idItem);
    }
    setCarrinho((itens) => {
      return [
        ...itens.map((item) => {
          if (item.idProduto === idItem) {
            return {
              ...item,
              quantidade: quantItem,
              valorTotal: quantItem * item.valor,
            };
          }
          return item;
        }),
      ];
    });
  };

  const limparCarrinho = () => {
    setCarrinho([]);
    localStorage.clear();
  };

  const salvarCarrinho = () => {
    if (carrinho.length > 0) {
      localStorage.setItem(localStorageKey, JSON.stringify(carrinho));
    }
  };

  const carregarCarrinho = () =>{
    const itens = JSON.parse(localStorage.getItem(localStorageKey))
    if (itens) {
        setCarrinho(itens)
    }else{
        setCarrinho([])
    }
  }

  return {
    carrinho,
    criarCarrinho,
    handleRemoverProd,
    somaCarrinho,
    editQuantCarrinho,
    limparCarrinho,
  };
}
