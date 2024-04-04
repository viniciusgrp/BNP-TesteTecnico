/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from "next/types";

import { IUser, IUserCreate } from "@/types/user.d";

const users: IUser[] = [];

let id = 0;

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send("Método não permitido");
    return;
  }

  const user: IUserCreate = req.body;

  users.push({ ...user, id });

  id++;

  return res.status(201).json(user);
};
