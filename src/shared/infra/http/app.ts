import express, { Application, json } from "express";

import "@shared/infra/mongoose";
import "@shared/containers";

import { routes } from "@shared/infra/http/routes";

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(json());
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export const server = new App().server;
