var express = require('express');
var bodyParser = require('body-parser');
var assert = require('assert');
var path = require('path');
const pug = require('pug');
var cookie = require('cookie');
var app = express();
var request = require('request');

var Web3 = require('web3');
// var web3 = new Web3();

// parse x-www-form-urlencoded and json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));






// set port
app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
        res.render("home.pug");        
});



app.get('/create_contract', (req, res) => {
        var salaries = [ 10 ]/* var of type uint256[] here */ ;
        var workers = [ 5 ]/* var of type address[] here */ ;
        var _budget = 34/* var of type uint256 here */ ;
        var worksiteContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"salary","type":"uint256"},{"name":"worker","type":"address"}],"name":"hire","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBudget","type":"uint256"}],"name":"adjustBudget","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"worker","type":"address"}],"name":"fire","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"worker","type":"address"},{"name":"payment","type":"uint256"}],"name":"makePayt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"boss","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"employees","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"budget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"salaries","type":"uint256[]"},{"name":"workers","type":"address[]"},{"name":"_budget","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
        var worksite = worksiteContract.new(
                salaries,
                workers,
                _budget,
                {
                        from: web3.eth.accounts[0], 
                        data: '0x6060604052341561000f57600080fd5b604051610db0380380610db0833981016040528080518201919060200180518201919060200180519060200190919050506000808351855114151561005057fe5b60008311151561005c57fe5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600181905550600091505b84518210156101e05784828151811015156100bf57fe5b9060200190602002015184838151811015156100d757fe5b906020019060200201516100e96101ea565b808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604051809103906000f080151561013c57600080fd5b90508060026000868581518110151561015157fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081806001019250506100a8565b50505050506101fa565b6040516102eb80610ac583390190565b6108bc806102096000396000f300606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806324f31f1e1461008857806340147d2f146100ca5780637885c960146100ed5780637b7dcad814610126578063c772af3914610168578063d0678947146101bd578063ed01bf2914610236575b600080fd5b341561009357600080fd5b6100c8600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061025f565b005b34156100d557600080fd5b6100eb6004808035906020019091905050610343565b005b34156100f857600080fd5b610124600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610359565b005b341561013157600080fd5b610166600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610432565b005b341561017357600080fd5b61017b610537565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101c857600080fd5b6101f4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061055c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561024157600080fd5b61024961058f565b6040518082815260200191505060405180910390f35b6000828261026b610595565b808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604051809103906000f08015156102be57600080fd5b905080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60008111151561034f57fe5b8060018190555050565b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663871992696040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561041b57600080fd5b6102c65a03f1151561042c57600080fd5b50505050565b6000816001540311151561044257fe5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5bd346a826040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561050f57600080fd5b6102c65a03f1151561052057600080fd5b505050806001600082825403925050819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b6040516102eb806105a68339019056006060604052341561000f57600080fd5b6040516040806102eb8339810160405280805190602001909190805190602001909190505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160018190555060016000806101000a81548160ff0219169083151502179055506001600060016101000a81548160ff02191690831515021790555060006002819055505050610221806100ca6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636aec5c011461005c5780638719926914610071578063f5bd346a14610086575b600080fd5b341561006757600080fd5b61006f6100a9565b005b341561007c57600080fd5b61008461014e565b005b341561009157600080fd5b6100a76004808035906020019091905050610199565b005b600060019054906101000a900460ff1615156100c157fe5b6000809054906101000a900460ff161515156100d957fe5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561013257fe5b60016000806101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff16151561016657fe5b6000809054906101000a900460ff16151561017d57fe5b60008060016101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff1615156101b157fe5b6000809054906101000a900460ff1615156101c857fe5b8060026000828254019250508190555060008060006101000a81548160ff021916908315150217905550505600a165627a7a72305820239827836c5efb424095f3ff83e2dfc0d56d0b735b704bd7e2a69d9ce78d46df0029a165627a7a723058205513df5222b3a62dbdd6f2fc331d35ae4e21ee9b34f14610e01b7d3d57544aea00296060604052341561000f57600080fd5b6040516040806102eb8339810160405280805190602001909190805190602001909190505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160018190555060016000806101000a81548160ff0219169083151502179055506001600060016101000a81548160ff02191690831515021790555060006002819055505050610221806100ca6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636aec5c011461005c5780638719926914610071578063f5bd346a14610086575b600080fd5b341561006757600080fd5b61006f6100a9565b005b341561007c57600080fd5b61008461014e565b005b341561009157600080fd5b6100a76004808035906020019091905050610199565b005b600060019054906101000a900460ff1615156100c157fe5b6000809054906101000a900460ff161515156100d957fe5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561013257fe5b60016000806101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff16151561016657fe5b6000809054906101000a900460ff16151561017d57fe5b60008060016101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff1615156101b157fe5b6000809054906101000a900460ff1615156101c857fe5b8060026000828254019250508190555060008060006101000a81548160ff021916908315150217905550505600a165627a7a72305820239827836c5efb424095f3ff83e2dfc0d56d0b735b704bd7e2a69d9ce78d46df0029', 
                        gas: '4700000'
                        }, function (e, contract){
                        console.log(e, contract);
                        if (typeof contract.address !== 'undefined') {
                                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                        }
        })
});

app.get('/pay_worker', (req, res, ) => {
        worksiteContract.makePayt(5);
});

app.get('/validate_payment', (req, res) => {
        worksiteContract.validatePayment();
});


