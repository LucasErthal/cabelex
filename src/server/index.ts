import { createServer, Model } from "miragejs";
declare const window: {
  server: any
}

if (window.server) {
  window.server.shutdown()
}

window.server = createServer({
   models: {
     filial: Model,
     funcionario: Model
   },

  seeds(server) {
    server.create("filial", { id: "0", nome: "Filial_1",  funcionarios: ["0", "1", "2"] })
    server.create("filial", { id: "1", nome: "Filial_2",  funcionarios: [] })
    server.create("filial", { id: "2", nome: "Filial_3",  funcionarios: [] })

    server.create("funcionario", { id: "0", nome: "Roberto",  filial: 'Filial_1' })
    server.create("funcionario", { id: "1", nome: "Carlos",  filial: "Filial_1" })
    server.create("funcionario", { id: "2", nome: "Joaquim",  filial: "Filial_1" })
  },
 
  routes() {
    this.get("/api/filiais", (schema) => {
      return schema.all("filial")
    });

    this.get("/api/funcionarios/:filial", (schema:any, request) => {
      const filial = request.params.filial;
      
      return schema.funcionarios.where({ filial });
    });

    this.get("/api/funcionarios/nome/:nome", (schema:any, request) => {
      const nome = request.params.nome;
      
      return schema.funcionarios.where({ nome });
    });

    this.post("/api/filiais", (schema:any, request) => {
      let attrs = JSON.parse(request.requestBody)
 
      return schema.filials.create(attrs);
    })

    this.post("/api/funcionarios", (schema:any, request) => {
      let attrs = JSON.parse(request.requestBody)
 
      return schema.funcionarios.create(attrs);
    })

    this.delete("/api/filiais/:id", (schema:any, request) => {
      const id = request.params.id;

      return schema.filials.find(id).destroy();
    })

    this.delete("/api/funcionarios/:id", (schema:any, request) => {
      const id = request.params.id;

      return schema.funcionarios.find(id).destroy();
    })

    this.patch("/api/filiais/:id", (schema:any, request) => {
      const id = request.params.id;
      const attrs = JSON.parse(request.requestBody);

      return schema.filials.find(id).update(attrs);
    })

    this.patch("/api/filiais/nome/:nome", (schema:any, request) => {
      const nome = request.params.nome;
      const attrs = JSON.parse(request.requestBody);

      return schema.filials.where(nome).update(attrs);
    })

    this.patch("/api/funcionarios/:id", (schema:any, request) => {
      const id = request.params.id;
      const attrs = JSON.parse(request.requestBody);

      return schema.funcionarios.find(id).update(attrs);
    })
  }
})

export default window.server;