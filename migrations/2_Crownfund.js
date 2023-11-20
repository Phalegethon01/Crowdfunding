const Migrations = artifacts.require("Crowdfunding");


module.exports=function(deployer){
    deployer.deploy(Migrations, 3600, 1000);
};


