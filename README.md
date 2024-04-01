# contract_deploy sayfası
    mkdir testprj
    cd testprj

Hangi node versiyonu kullanacaksan aşağıdaki sürümü değiştir

    nvm install v20.11.1
    nvm use v20.11.1

Bir Node.js sürümünü nvm ile yükledikten sonra, o sürümü kullanmak için şu komutu kullanırsınız:
      
      nvm use v20.11.1

belirli bir projenin her zaman belirli bir Node.js sürümünü kullanmasını istiyorsanız, 
projenizin kök dizininde bir .nvmrc dosyası oluşturabilir ve içine projeniz için istediğiniz Node.js sürümünü yazabilirsiniz:

    echo "v20.11.1" > .nvmrc

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

    npm install --save-dev @nomiclabs/hardhat-ethers ethers
 
Ekle   hardhat.config.js içine :
 
    require("@nomiclabs/hardhat-ethers");

     npx hardhat compile
test klasörüne Token.js yükle
Şimdi test edelim

    npx hardhat test




 
