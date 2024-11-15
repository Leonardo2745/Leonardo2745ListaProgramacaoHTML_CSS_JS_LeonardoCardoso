import LojaOnline from "./classes/LojaOnline.js";

const loja = new LojaOnline();

loja.listarProdutos();
loja.adicionarAoCarrinho(0);
loja.adicionarAoCarrinho(1);
loja.adicionarAoCarrinho(2);
loja.showCarrinhoInfo();

console.log('Removendo o 2 item do carrinho:')
loja.removerDoCarrinho(2);
loja.showCarrinhoInfo();