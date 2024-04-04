/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from "next/types";

import { IUser } from "@/types/user.d";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({error: "Método não permitido"});
    return;
  }

  const users: Array<IUser> = [
    {
      id: 0,
      name: "Vinicius",
      email: "viniciusgrp@gmail.com",
    },
    {
      id: 1,
      name: "Beto",
      email: "beto@mail.com",
    },
    {
      id: 2,
      name: "Clara",
      email: "clara@bird.com",
    },
  ];

  return res.status(200).json(users);
};
