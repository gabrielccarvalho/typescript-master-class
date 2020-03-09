import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {name: 'Gabriel', email: 'gabriel@email.com'},
  {name: 'Pedro', email: 'pedro@email.com'},
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Gabriel Campos', 
        email: 'gabriel@email.com' 
      },
      message: { 
        subject: 'Bem-vindo ao sistema', 
        body: 'seja bem-vindo' 
      }
    });

    return res.send();
  }
};