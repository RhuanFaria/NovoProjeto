const supertest = require("supertest"); //importa o pacote do supertest

const app = require("../app");

const request = supertest("../express");

// verifica se uma chamada POST retorna o status 201 e 
// um conteúdo do tipo JSON contendo as propriedades id, nome e preco com os valores inseridos.
test("Deve adicionar um produto com POST e retornar status 201 e um JSON", async function () {
    const response = await request.post("/produtos").send({"nome": "uva", "preco": 20.00 });
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("nome", "uva");
    expect(response.body).toHaveProperty("preco", 20.00  );
    expect(response.status).toBe(201);
    expect(response.type).toMatch(/json/);
  });

  test("Deve retornar status 200 e um JSON no GET /produtos/1", async function () {
    const response = await request.get("/produtos/1");
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/);
  });

  test("Deve retornar status 404 e um JSON no GET /produtos/100", async function () {
    const response = await request.get("/produtos/100");
    expect(response.body).toHaveProperty("msg", "Produto não encontrado");
    expect(response.status).toBe(404);
    expect(response.type).toMatch(/json/)
  });

  test("Deve retornar status 404 e um JSON no GET /produtos/100", async function () {
    const response = await request.get("/produtos/100");
    expect(response.body).toHaveProperty("msg", "Nome e preço do produtos são obrigatórios");
    expect(response.status).toBe(422);
    eexpect(response.type).toMatch(/json/)
  });

  test("Deve atualizar um produto com PUT e retornar status 200 e um JSON", async function () {
    const response = await request.put("/produtos/1").send({"nome": "uva", "preco": 20.00 });
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("nome", "uva");
    expect(response.body).toHaveProperty("preco", 20.00  );
    expect(response.type).toMatch(/json/)
  });
