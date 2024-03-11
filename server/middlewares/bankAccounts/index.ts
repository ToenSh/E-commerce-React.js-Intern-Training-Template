import express from 'express';

const create = (req, res, next) => {
  const { userID } = req.body;
  const { db } = req.app;
  if (db == null) {
    throw Error('You must bind the router db to the app');
  }
  try {
  } catch (error) {
    throw Error(
      'You must add a "transactions" and "bankAccounts" collection to your db'
    );
  }
};

export default express
  .Router()
  .post('/bankAccounts', create)
  .patch('/bankAccounts/:id')
  .delete('/bankAccounts/:id');
