async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contract with account:", deployer.address);
  
    const Token = await ethers.getContractFactory("MujahidToken");
    const token = await Token.deploy(1000000); // Initial supply: 1,000,000 MTK tokens
  
    console.log("Token deployed to:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });