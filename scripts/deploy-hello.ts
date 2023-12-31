import "@nomiclabs/hardhat-ethers";
import { Contract } from "ethers";
import { ethers } from "hardhat";

async function foo() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed();
    return hello;
}

async function deploy() {
    const hello = foo();

    return hello;
}

async function sayHello(hello: Contract) {
    console.log(`Say Hello: ${await hello.hello()}`);
}

deploy().then(sayHello);
