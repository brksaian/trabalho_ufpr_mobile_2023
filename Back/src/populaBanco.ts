import { prisma } from "./lib/prisma";

interface pedidoProduto {
  quantity: number;
  forecast: number;
  produtoId: string;
}

(async function populaBanco() {
  /*const produtos = [
    {
      name: "a",
      forecast: 2,
      price: 5.6,
    },
    {
      name: "calça jeans",
      forecast: 2,
      price: 20.0,
    },
    {
      name: "camisa social",
      forecast: 3,
      price: 35.0,
    },
    {
      name: "bermuda",
      forecast: 1,
      price: 15.0,
    },
  ];
  produtos.forEach(async (produto) => {
    await prisma.produto.create({ data: produto });
  });

  const pedido_produto = [
    {
      quantity: 3,
      forecast: 2,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 2,
      forecast: 2,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 3,
      forecast: 2,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 2,
      forecast: 3,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 3,
      forecast: 2,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 5,
      forecast: 3,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 3,
      forecast: 1,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 5,
      forecast: 2,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 2,
      forecast: 3,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 1,
      forecast: 3,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 3,
      forecast: 2,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 2,
      forecast: 2,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 3,
      forecast: 2,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 2,
      forecast: 2,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 1,
      forecast: 1,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 2,
      forecast: 1,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 1,
      forecast: 2,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 3,
      forecast: 3,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 1,
      forecast: 1,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 1,
      forecast: 3,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 4,
      forecast: 1,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 2,
      forecast: 3,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 3,
      forecast: 3,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 2,
      forecast: 3,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 5,
      forecast: 2,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 4,
      forecast: 3,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 3,
      forecast: 3,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 5,
      forecast: 1,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 3,
      forecast: 3,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 3,
      forecast: 3,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 3,
      forecast: 3,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 3,
      forecast: 1,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 2,
      forecast: 1,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 1,
      forecast: 3,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 5,
      forecast: 3,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 4,
      forecast: 1,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 1,
      forecast: 1,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 1,
      forecast: 1,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 2,
      forecast: 3,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 2,
      forecast: 1,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 5,
      forecast: 1,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 3,
      forecast: 1,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 4,
      forecast: 3,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 3,
      forecast: 2,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 2,
      forecast: 1,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 4,
      forecast: 2,
      produtoId: "de15838a-bff7-4925-9c11-04b9586d78a3",
    },
    {
      quantity: 2,
      forecast: 1,
      produtoId: "6828d770-977c-4588-9f0f-57292a742e9a",
    },
    {
      quantity: 5,
      forecast: 3,
      produtoId: "2e605e7f-a563-481f-aad2-b002217da458",
    },
    {
      quantity: 3,
      forecast: 2,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
    {
      quantity: 5,
      forecast: 2,
      produtoId: "b348befd-6b7a-4659-b773-4cce4206244e",
    },
  ];
  pedido_produto.forEach(async (produto) => {
    await prisma.pedido_produto.create({ data: produto });
  });

  const users = [
    {
      name: "José",
      cpf: "764.532.080-08",
      email: "jose@cliente.com",
      endereco: "Rua B, 123",
      password: "1234",
      telefone: "(22) 22222-2222",
    },
    {
      name: "Joana",
      cpf: "183.936.440-89",
      email: "joana@cliente.com",
      endereco: "Rua C, 123",
      password: "1234",
      telefone: "(33) 33333-3333",
    },
    {
      name: "Joaquina",
      cpf: "418.514.760-08",
      email: "joaquina@cliente.com",
      endereco: "Rua D, 123",
      password: "1234",
      telefone: "(44) 44444-4444",
    },
    {
      name: "João",
      cpf: "693.053.060-39",
      email: "joao@cliente.com",
      endereco: "Rua A, 123",
      password: "1234",
      telefone: "(11) 11111-1111",
    },
  ];

  users.forEach(async (user) => {
    await prisma.user.create({ data: user });
  });

  const pedidos = [
    {
      userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092",
      nome: 1,
      forecast: 1,
      estado: "EM ABERTO",
    },
    {
      userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092",
      nome: 2,
      forecast: 1,
      estado: "EM ABERTO",
    },
    {
      userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092",
      nome: 3,
      forecast: 1,
      estado: "EM ABERTO",
    },
    {
      userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092",
      nome: 4,
      forecast: 4,
      estado: "REJEITADO",
    },
    {
      userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092",
      nome: 5,
      forecast: 6,
      estado: "RECOLHIDO",
    },
    {
      userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092",
      nome: 6,
      forecast: 6,
      estado: "RECOLHIDO",
    },
    {
      userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092",
      nome: 7,
      forecast: 5,
      estado: "CANCELADO",
    },
    {
      userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092",
      nome: 8,
      forecast: 7,
      estado: "FINALIZADO",
    },
    {
      userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092",
      nome: 9,
      forecast: 7,
      estado: "FINALIZADO",
    },
    {
      userId: "87fbd200-0445-480d-808f-1539614b041b",
      nome: 1,
      forecast: 1,
      estado: "EM ABERTO",
    },
    {
      userId: "87fbd200-0445-480d-808f-1539614b041b",
      nome: 2,
      forecast: 2,
      estado: "AGUARDANDO PAGAMENTO",
    },
    {
      userId: "87fbd200-0445-480d-808f-1539614b041b",
      nome: 3,
      forecast: 2,
      estado: "AGUARDANDO PAGAMENTO",
    },
    {
      userId: "87fbd200-0445-480d-808f-1539614b041b",
      nome: 4,
      forecast: 3,
      estado: "PAGO",
    },
    {
      userId: "87fbd200-0445-480d-808f-1539614b041b",
      nome: 5,
      forecast: 7,
      estado: "FINALIZADO",
    },
    {
      userId: "87fbd200-0445-480d-808f-1539614b041b",
      nome: 6,
      forecast: 7,
      estado: "FINALIZADO",
    },
    {
      userId: "45e7ba97-9af0-43a5-8652-56a1007481ea",
      nome: 1,
      forecast: 6,
      estado: "RECOLHIDO",
    },
    {
      userId: "45e7ba97-9af0-43a5-8652-56a1007481ea",
      nome: 2,
      forecast: 6,
      estado: "RECOLHIDO",
    },
    {
      userId: "45e7ba97-9af0-43a5-8652-56a1007481ea",
      nome: 3,
      forecast: 2,
      estado: "AGUARDANDO PAGAMENTO",
    },
    {
      userId: "45e7ba97-9af0-43a5-8652-56a1007481ea",
      nome: 4,
      forecast: 3,
      estado: "PAGO",
    },
    {
      userId: "45e7ba97-9af0-43a5-8652-56a1007481ea",
      nome: 5,
      forecast: 3,
      estado: "PAGO",
    },
    {
      userId: "45e7ba97-9af0-43a5-8652-56a1007481ea",
      nome: 6,
      forecast: 7,
      estado: "FINALIZADO",
    },
    {
      userId: "45e7ba97-9af0-43a5-8652-56a1007481ea",
      nome: 7,
      forecast: 7,
      estado: "FINALIZADO",
    },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      nome: 1,
      forecast: 6,
      estado: "RECOLHIDO",
    },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      nome: 2,
      forecast: 2,
      estado: "AGUARDANDO PAGAMENTO",
    },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      nome: 3,
      forecast: 2,
      estado: "AGUARDANDO PAGAMENTO",
    },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      nome: 4,
      forecast: 3,
      estado: "PAGO",
    },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      nome: 5,
      forecast: 3,
      estado: "PAGO",
    },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      nome: 6,
      forecast: 7,
      estado: "FINALIZADO",
    },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      nome: 7,
      forecast: 7,
      estado: "FINALIZADO",
    },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      nome: 8,
      forecast: 7,
      estado: "FINALIZADO",
    },
  ];

  pedidos.forEach(async (pedido) => {
    await prisma.pedido.create({
      data: {
        nome: pedido.nome,
        estado: pedido.estado,
        userId: pedido.userId,
        forecast: pedido.forecast,
      },
    });
  });

  console.log("Feito chefe!");
  /*const produtos = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  console.log(produtos);*/
})();

function gerarPedido_Produto() {
  const produtos = [
    "6828d770-977c-4588-9f0f-57292a742e9a",
    "b348befd-6b7a-4659-b773-4cce4206244e",
    "2e605e7f-a563-481f-aad2-b002217da458",
    "de15838a-bff7-4925-9c11-04b9586d78a3",
  ];

  const pedido_produto: pedidoProduto[] = [];

  for (let i = 0; i < 50; i++) {
    // Escolha um produto aleatoriamente da lista de produtos
    const produtoAleatorio =
      produtos[Math.floor(Math.random() * produtos.length)];

    // Crie um item de pedido com quantidade e previsão aleatórias
    const itemPedido: pedidoProduto = {
      quantity: Math.floor(Math.random() * 5) + 1, // Quantidade entre 1 e 5
      forecast: Math.floor(Math.random() * 3) + 1, // Previsão entre 1 e 3
      produtoId: produtoAleatorio,
    };

    pedido_produto.push(itemPedido);
  }

  console.log(pedido_produto);
}

function gerarPedidos() {
  type Usuario = {
    id: string;
    name: string;
  };

  type Pedido = {
    userId: string;
    nome: number;
    forecast: number;
    estado: string;
    pedido_produto: string[];
  };

  type PedidosUsuarios = Record<string, string>;

  type Estados = Record<string, number>;

  const usuarios: Usuario[] = [
    { id: "87fbd200-0445-480d-808f-1539614b041b", name: "José" },
    { id: "ffdee9f8-ba56-4ee5-b12e-3801d260155d", name: "Joana" },
    { id: "45e7ba97-9af0-43a5-8652-56a1007481ea", name: "Joaquina" },
    { id: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", name: "João" },
  ];

  const pedidos: Pedido[] = [];
  const pedidoProdutoIds = [
    "02c3da6f-5bb4-4794-a4da-09896a0d4a34",
    "03a2b192-5bff-460e-821f-6b85d9962a5c",
    "03d959dc-4cd8-4d3c-8c6b-7b8d69e18f9b",
    "056c5348-1471-4895-ac7f-ada780f5f920",
    "0b81e8ea-5179-4b84-85a0-44042aec1c25",
    "0d8193af-0b6f-4e42-922b-4482064884dc",
    "0f328ace-5a69-4a1e-b7c9-e916b381f435",
    "0f918ee5-bed1-4350-9817-84fdc8d2fa6f",
    "106bcaba-a64f-4bc7-a2e9-41c0cce10cc9",
    "126b42b0-aa40-4c79-a362-bfd8f6038906",
    "1553768a-5643-4533-9f91-e74ef689b30f",
    "16683382-c103-4b2d-848a-621920851485",
    "169a243d-c39a-45ca-8c2f-7620dfcd77a4",
    "16a0e29e-da1e-40f4-92b3-b095c25eca4e",
    "16cb87b8-3f1d-4053-987e-c412df891206",
    "1845d96f-b95b-44bd-b6be-444fcfc071c1",
    "18e4a988-dfd5-4fd1-abed-2706a15bc8fc",
    "1f32bfc7-3b8a-49ae-98f3-f94e962a5e13",
    "202b7568-faf1-4f0c-8be7-59fc0082215a",
    "284a7a8c-2897-4887-9bbd-e8b9359fc6b3",
    "2d51f967-4d32-457a-964b-40c12374986f",
    "2d945960-9eba-4474-a9f2-a25ba0a63911",
    "3e3ccd09-d67c-4464-9ea3-6e471f7e8b73",
    "427a36e2-00fe-40fb-9dc1-525063f42691",
    "44287550-aecf-4426-8b94-9540c191ddcd",
    "44e2bf41-120c-48a7-9e16-99ce6e73dbc2",
    "45123a19-ada7-4b97-9807-996ce218442f",
    "45810309-9e45-4447-ae6c-6db2868040a6",
    "4d564999-eed8-43bd-9b80-63b3f2180b02",
    "51d2001b-b49a-4709-b498-b1d184c5f177",
    "524af5bd-b687-4535-bdbd-4e875357c124",
    "53070f68-891a-4103-aa28-92f0ed6d776e",
    "54c72aa2-c4de-434a-ba6f-119e1485a664",
    "55d3405e-3d6a-4d3b-aee1-b249e0510432",
    "57497ff5-52b3-4de6-afcf-fa6645a7a1b1",
    "57a33f76-5383-4331-ae9b-360c7ef12320",
    "58bc92f4-7cc2-4b7b-9450-d67dca62dbd2",
    "5ab2f0e6-cb51-4c43-9f67-70e4f58986a4",
    "650d27b5-2c50-4b5c-8e92-4e4f53ff62bc",
    "66d00ada-0006-450c-ad42-6703c5c9a690",
    "684c8bce-c57f-4281-8adb-e9fa26fa0f72",
    "6c1b30f0-9a08-42c1-8a88-3b33ef2893fd",
    "6c4467c9-b4a7-4cd1-b3ec-de4b0b8be480",
    "76a767e9-80fb-4ad8-94cf-7dda8e977953",
    "76f5c449-9781-48cc-a5e9-25f1166c98e3",
    "7748b728-9f2e-495b-834a-8c995bf588eb",
    "77883589-7903-46fc-bb3d-86d76ff54501",
    "7b94a871-8aff-45dc-8e3b-0de6bb06dc3d",
    "7fea52e9-a920-4e2a-bc2c-dd975e181f32",
    "82a305a3-b904-4025-b4ab-e4a1bfb60439",
    "83b7dfbf-3c83-4c54-9924-338aa43128c5",
    "87152823-78d3-4582-bb12-8a3ea55a039c",
    "890e8d28-fa81-422d-baa4-dccd93db6794",
    "89f5acbe-6e6d-49de-bc1b-144a8a8e3eb0",
    "8a8e355c-4964-42fb-9c7e-456b05a42056",
    "8ad376f1-596f-40ee-bed4-5cf6ab2af107",
    "8b34db29-8aa3-4e3e-a7ae-c893e1b2f654",
    "8c5715dd-6395-4fc2-a647-ff21b3068e2d",
    "8ee5db78-ef11-49c6-b966-024c0d297d12",
    "9c54dfda-f9c0-4499-a45d-75ad306c6f75",
    "9f74462b-d46b-495b-ad08-80857eac7377",
    "9ff5f918-f30e-44f4-845a-2f8783191f1b",
    "a31fe20e-80c9-42c6-a5d7-a3447fa5fb68",
    "a584886f-7a62-4d35-8c2f-6a8c505ebdfd",
    "a6105388-19de-473c-9fba-fa42cf840e1c",
    "a87ef5fb-ebbf-411b-913a-f443d5c0c2a6",
    "abf3c38e-e061-4ebb-a61c-44ae8c08fd26",
    "b3e0294c-a0be-4429-940f-3d81bd6369e9",
    "b6008f48-2873-45d1-9ae7-82490421a3fd",
    "b6f02e97-05a7-43d0-9b20-a2ee338a943c",
    "b76b5899-1350-4026-ad01-67177b9268d9",
    "baefaafa-3832-4cfe-b6ab-8e43a4fdf5e8",
    "bbc3b343-afdb-4652-9c4a-1cc068b9dcad",
    "bdd100e4-e37c-4204-a71f-c70a65c33af9",
    "be926e8b-3c1c-4a99-bca1-67550d4461db",
    "c4a69d36-cc09-4c4a-8818-4bee8a4bba8c",
    "c4b57dd9-517f-4380-8d2e-716228201f32",
    "c608216a-3c84-4bb1-a32a-9bce44dc4891",
    "c670868e-6426-4bda-a952-558085379fa3",
    "c9341870-343e-480c-8221-f4a8dcda6806",
    "cefdd456-61e6-4c64-83eb-90ca3f62e65d",
    "d099bc0e-375e-4cbf-99b4-d8a26acae482",
    "d5e8cd14-e997-4485-ba38-6fee54e21222",
    "d82b3f03-4956-44e4-bd1c-2522ce1f2c66",
    "d96ca149-b5f2-4919-86b9-943168e15a96",
    "e0de2d62-26e4-4412-8d6a-b9b60415b0e6",
    "e130e147-a8de-420c-a741-e0ba07b96d21",
    "e2708d17-2bae-46f0-96e7-30d63d05a7a4",
    "e2e606a3-868b-432e-8504-14b85f5feb7c",
    "e4fec3d0-dd90-4655-806d-ee5771062804",
    "e5bbeec4-75e0-47f5-8ab6-34320559b024",
    "e718ce9c-574c-4ee1-99d2-4645e34d9035",
    "e997e82c-e297-47f8-b923-aaa87d840d4f",
    "ec59261f-39d9-41bd-a088-61bc231aad2e",
    "efd1ceaf-c3b6-4414-aba9-cf844f422ce3",
    "f20313f1-ac2d-44a3-bcfc-3ac04e624562",
    "f2f30edd-f079-4d05-a849-5e0e7e49e8af",
    "f5a3627c-d386-4d5f-9d01-b535fb35aa5e",
    "f837c570-7ceb-4adb-ba2b-38049c437bcf",
    "fede9081-d74b-4de3-8435-4ae5b86bced1",
  ];

  const pedidosUsuarios: PedidosUsuarios = {
    "87fbd200-0445-480d-808f-1539614b041b": "José",
    "ffdee9f8-ba56-4ee5-b12e-3801d260155d": "Joana",
    "45e7ba97-9af0-43a5-8652-56a1007481ea": "Joaquina",
    "88d7b253-a2d9-4a93-a9a4-ed6042e7f092": "João",
  };

  const estados: Estados = {
    "EM ABERTO": 1,
    "AGUARDANDO PAGAMENTO": 2,
    PAGO: 3,
    REJEITADO: 4,
    CANCELADO: 5,
    RECOLHIDO: 6,
    FINALIZADO: 7,
  };

  // Função para gerar um ID de pedido único
  type PedidoCounter = Record<string, number>;

  function generatePedidoId(userId: string, counter: PedidoCounter) {
    const userName = pedidosUsuarios[userId];
    counter[userName] = counter[userName] || 0;
    counter[userName]++;
    return counter[userName];
  }

  const generatePedidoIdCounter: PedidoCounter = {};

  // Processar os dados dos pedidos
  const data = [
    //Joao
    { userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", estado: "EM ABERTO" },
    { userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", estado: "EM ABERTO" },
    { userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", estado: "EM ABERTO" },
    { userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", estado: "REJEITADO" },
    { userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", estado: "RECOLHIDO" },
    { userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", estado: "RECOLHIDO" },
    { userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", estado: "CANCELADO" },
    { userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", estado: "FINALIZADO" },
    { userId: "88d7b253-a2d9-4a93-a9a4-ed6042e7f092", estado: "FINALIZADO" },

    // José
    { userId: "87fbd200-0445-480d-808f-1539614b041b", estado: "EM ABERTO" },
    {
      userId: "87fbd200-0445-480d-808f-1539614b041b",
      estado: "AGUARDANDO PAGAMENTO",
    },
    {
      userId: "87fbd200-0445-480d-808f-1539614b041b",
      estado: "AGUARDANDO PAGAMENTO",
    },
    { userId: "87fbd200-0445-480d-808f-1539614b041b", estado: "PAGO" },
    { userId: "87fbd200-0445-480d-808f-1539614b041b", estado: "FINALIZADO" },
    { userId: "87fbd200-0445-480d-808f-1539614b041b", estado: "FINALIZADO" },

    // Joaquina
    { userId: "45e7ba97-9af0-43a5-8652-56a1007481ea", estado: "RECOLHIDO" },
    { userId: "45e7ba97-9af0-43a5-8652-56a1007481ea", estado: "RECOLHIDO" },
    {
      userId: "45e7ba97-9af0-43a5-8652-56a1007481ea",
      estado: "AGUARDANDO PAGAMENTO",
    },
    { userId: "45e7ba97-9af0-43a5-8652-56a1007481ea", estado: "PAGO" },
    { userId: "45e7ba97-9af0-43a5-8652-56a1007481ea", estado: "PAGO" },
    { userId: "45e7ba97-9af0-43a5-8652-56a1007481ea", estado: "FINALIZADO" },
    { userId: "45e7ba97-9af0-43a5-8652-56a1007481ea", estado: "FINALIZADO" },

    // Joana
    { userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d", estado: "RECOLHIDO" },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      estado: "AGUARDANDO PAGAMENTO",
    },
    {
      userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d",
      estado: "AGUARDANDO PAGAMENTO",
    },
    { userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d", estado: "PAGO" },
    { userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d", estado: "PAGO" },
    { userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d", estado: "FINALIZADO" },
    { userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d", estado: "FINALIZADO" },
    { userId: "ffdee9f8-ba56-4ee5-b12e-3801d260155d", estado: "FINALIZADO" },
  ];

  data.forEach((item) => {
    const userId = item.userId;
    const userName = pedidosUsuarios[userId];
    const estado = item.estado;
    const pedidoId = generatePedidoId(userId, generatePedidoIdCounter);

    pedidos.push({
      userId,
      nome: pedidoId,
      forecast: estados[estado],
      estado: estado,
      pedido_produto: pedidoProdutoIds,
    });
  });

  console.log(pedidos);
}
