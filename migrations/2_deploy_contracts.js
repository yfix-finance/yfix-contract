var YFIXContract = artifacts.require("../contracts/YFIXFinance.sol");
module.exports = function(deployer, network, accounts) {
 deployer.deploy(YFIXContract, {from: accounts[0]});
};