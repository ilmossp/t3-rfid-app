import { NextApiRequest, NextApiResponse } from 'next';

type LoginData = {
    Email: string;
    Password: string;
};

export default function handler(req:NextApiRequest,res:NextApiResponse){
    res.status(200).json({message: req.body});
}