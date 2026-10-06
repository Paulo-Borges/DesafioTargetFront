export interface StockMovement {
   id: string;
  codigoProduto: number;
  tipo: 'ENTRADA' | 'SAIDA';
  quantidade: number;
  descricao: string;
}