const { deployer, deployContract } = require("./deploy_contract");
const deployScript = async () => {

  const {address: diceGameAddr } = await deployContract({
    eth_contract_address: "0x49D36570D4E46F48E99674BD3FCC84644DDD6B96F7C741B1562B82F9E004DC7",
  }
    , "DiceGame");

    await deployContract({
      dice_game_address: diceGameAddr,
      owner: deployer.address
    }
      , "RiggedRoll");
};

deployScript()
  .then(() => {
    console.log("All Setup Done");
  })
  .catch(console.error);
