# Atividade 5 - Pop Up personalizada

**Aluno:** Leonardo de Paula Ferreira  
**Turma:** 04AN  
**Professor:** Claudio Alexandre Gananca  
**Instituição:** Universidade Municipal de São Caetano do Sul - USCS  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplina:** Padrões de Usabilidade e Desenvolvimento de Interfaces

## Sobre a atividade

Projeto desenvolvido como parte da **Atividade 5 - Pop Up personalizada**. O exercício propõe corrigir uma página de login para que as mensagens de sucesso e insucesso sejam exibidas por uma janela pop-up criada em JavaScript, vinculando corretamente os arquivos com as tags `<link>` e `<script>` e substituindo o uso de `alert()`.

A página permite testar o fluxo de login e o de cadastro. Os campos obrigatórios e a confirmação de senha são validados; os avisos correspondentes aparecem na pop-up personalizada.

## Objetivo

Praticar a integração entre HTML, CSS e JavaScript, incluindo:

- Vinculação de folhas de estilo externas com `<link>`;
- Vinculação de código JavaScript com `<script>`;
- Criação e exibição dinâmica de uma pop-up;
- Exibição de mensagens de sucesso e erro sem usar `alert()`;
- Validação de campos de formulário.

## Funcionalidades

- Tela de login com e-mail e senha;
- Alternância para o formulário de cadastro, com confirmação de senha;
- Validação de campos obrigatórios e comparação das senhas;
- Destaque visual dos campos inválidos;
- Pop-up personalizada com título e mensagem para sucesso ou insucesso;
- Fechamento da pop-up pelo controle no cabeçalho.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Como executar

Não há dependências ou processo de compilação. Abra `login.html` em um navegador. Para uma experiência mais consistente, use a opção de servidor local da sua IDE ou extensão de servidor local.

## Estrutura do projeto

```text
popup/
├── img/          # Imagens usadas pela página
├── cores.css     # Classes e estilos de cores
├── login.html    # Página de login e cadastro
├── popup.css     # Estilos da pop-up
├── popup.js      # Criação, abertura e fechamento da pop-up
└── README.md
```

O HTML vincula `popup.css` e `cores.css` com `<link>` e carrega `popup.js` com `<script>`. A lógica da pop-up fica em `popup.js`; a página chama `openPopup()` para mostrar as mensagens de retorno.

## Como testar

1. Abra `login.html` no navegador.
2. Clique em **LOGIN** sem preencher os campos para ver a mensagem de insucesso.
3. Preencha e-mail e senha e clique em **LOGIN** para ver a mensagem de sucesso.
4. Clique em **CADASTRO** para exibir a confirmação de senha. Teste os campos vazios, senhas diferentes e senhas iguais.
5. Feche a pop-up pelo ícone no cabeçalho.

## Observações

A atividade demonstra a interface e a validação no navegador. O projeto não implementa autenticação real, conexão com servidor ou armazenamento de usuários.

## Autor

**Leonardo de Paula Ferreira**
