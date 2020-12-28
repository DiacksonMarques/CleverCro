import styled from "styled-components";

import { Table } from 'antd';

export const Tables = styled(Table)`

// Dando estilo ao Title (dando cor ao fundo, mudando cor da letra)
.ant-table-title{
    background: #292933 !important;
    color: #000 !important;
}
// Dando estilo ao Footer (dando cor ao fundo, mudando cor da letra)
.ant-table-footer{
    background: #292933 !important;
    color: #000 !important;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
}
// Dando estilo ao Head ( centralizando texto, dando cor ao fundo, mudando cor da letra)
.ant-table-thead th {
    text-align:center !important;
    background: #292933 !important;
    color: #fff;
}
// Dando estilo ao Body ( centralizando texto, dando cor ao fundo)
.ant-table-tbody  > tr>td {
    text-align:center !important;
    background-color: #E6E6FF !important;
}

// Dando estilo ao Tr (ao passar o mouse por cima da linha ela muda de cor e coloca uma borda em cima e baixo)
.ant-table-tbody > tr:hover > td {
  background: #525266  !important;
  border-top: solid 1px #adc3ed !important;
  border-bottom: solid 1px #adc3ed !important;
  color: #E6E6FF !important;
}

//// Dando estilo ao Botão + ( Mudando cor)
.ant-table-row-expand-icon{
  color: #404080 !important;
}

.ant-table-row-expand-icon::before, .ant-table-row-expand-icon::after{
  color: #26264D !important;
}

// Dando estilo a Paginação
// Colocando mais espaços entre os componetes
.ant-table-pagination.ant-pagination {
    margin: 60px 0 !important;
}

// Dando estilo aos Itens (mudando cor, bordas)
.ant-pagination-item{
    background-color: #e7ebee !important;
    border-radius: 0 !important;
    border: 1px solid #e7ebee !important;
    margin-left:10px !important;
}

// Dando estilo aos Itens depois do click (mudando cor, bordas)
.ant-pagination-item-link:after,.ant-pagination-jump-prev:after, .ant-pagination-jump-next:after{
    background-color: #e7ebee !important;
    border-radius: 0 !important;
    border: 1px solid #e7ebee !important;
}
.ant-pagination-next ,.ant-pagination-jump-prev,.ant-pagination-jump-next{
    margin-left:10px !important;
}

.ant-pagination-jump-prev:after, .ant-pagination-jump-next:after{
    color: #999 !important;
}

.ant-pagination-item a ,.ant-pagination-item-link:after{
    color: #999 !important;
}

// Dando estilo aos Item ativo (mudando cor, bordas)
.ant-pagination-item-active{
    background-color: #292933 !important;
    border-radius: 0 !important;
    border: 1px solid #292933 !important;
}
.ant-pagination-item-active a {
    color: #fff !important;
}
`;
