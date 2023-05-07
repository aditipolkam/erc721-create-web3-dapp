const hre = require("hardhat");

async function main() {
  const address = "0x4D3D949E18aEaCc19D0730BE9E6EECFC7133e8Cf";
  const nftContractFactory = await hre.ethers.getContractFactory("EpicNfts");
  const nftContract = await nftContractFactory.attach(address);

  //let tokenURI = "https://jsonkeeper.com/b/CQZ0"
  let txn = await nftContract.makeAnEpicNFT();
  await txn.wait();
  console.log("Minted NFT");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
