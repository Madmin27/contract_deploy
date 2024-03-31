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

    npm install --save-dev @nomicfoundation/hardhat-toolbox

 
