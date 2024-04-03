// test/Token.js 0xF6D39Dda8997407110264acEc6a24345834cB639    44170d535842b4731898b6556c170c26e45c4a35068d25c148f97021354223f5 

const { expect } = require("chai");

describe("Token contract", function () {
  let Token;
  let hardhatToken;
  let owner;

  beforeEach(async function () {
    Token = await ethers.getContractFactory("Token");
    [owner] = await ethers.getSigners();
    hardhatToken = await Token.deploy();
  });

  describe("Deployment", function () {
    it("should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      const totalSupply = await hardhatToken.totalSupply();
      // Use the BigNumber `eq` method to compare values of BigNumbers
      expect(ownerBalance.eq(totalSupply)).to.be.true;
    });
  });
});

