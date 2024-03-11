import express from 'express';
import jsonServer from 'json-server';
import init from './init';
import auth from './auth';
import transactions from './transactions';
import bankAccounts from './bankAccounts';

const jsonServerMiddlewares = jsonServer.defaults();

export default express
  .Router()
  .use(jsonServerMiddlewares)
  .use(jsonServer.bodyParser)
  .use(init)
  .use(auth)
  .use(transactions)
  .use(bankAccounts);
