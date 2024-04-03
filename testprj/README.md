
 Bu dosyayı oluşturduktan sonra, projenizin bulunduğu dizinde nvm use komutunu çalıştırdığınızda,
 .nvmrc dosyasında belirtilen sürüm otomatik olarak kullanılır.

    cd
    cd testprj
    npm init

    npm install --save-dev hardhat
    npm i hardhat
    npx hardhat init
    
aşağıdaki pluginleri yükle

    npm install --save-dev @nomicfoundation/hardhat-toolbox

contracts/Token.sol yükle veya oluşturup içeriğini deeğiştir

    npm install chai@4.3.4 --save-dev
    # npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai

Install the Hardhat Ethers plugin:

    npm install --save-dev @nomiclabs/hardhat-ethers chai
    npm install --save-dev @nomicfoundation/hardhat-toolbox/network-helpers chai
Ekle   hardhat.config.js içine :
 
    require("@nomiclabs/hardhat-ethers");

     npx hardhat compile
test klasörüne Token.js yükle
Şimdi test edelim

    npx hardhat test


    
