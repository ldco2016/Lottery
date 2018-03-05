const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
  // Get a list of accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy contract
});

describe('inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts);
  });
});
