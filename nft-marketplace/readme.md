Aşağıdakileri kullanarak full stack bir geliştirme yapacağız.

Framework — Next.js
Solidity geliştirme ortamı — Hardhat
Dosya Depolama — IPFS
Ethereum Web Client Kitaplığı — Ethers.js

Proje Detayları:
![image](https://github.com/Madmin27/contract_deploy/assets/94014225/810798ef-70e1-4aac-82b5-26f1c5222a75)

Bir kullanıcı bir öğeyi satışa çıkardığında, öğenin mülkiyeti, oluşturucudan pazar yerine aktarılır.

Bir kullanıcı bir ürün satın aldığında, satın alma fiyatı alıcıdan satıcıya aktarılacak ve ürün pazardan alıcıya aktarılacaktır.

Pazar yeri sahibi bir listeleme ücreti belirleyebilecektir. Bu ücret, herhangi bir satışın tamamlanmasının ardından satıcıdan alınacak ve sözleşme sahibine devredilecek ve pazar yeri sahibinin piyasada gerçekleştirilen herhangi bir satıştan mükerrer gelir elde etmesini sağlayacaktır.

Pazar yeri mantığı iki akıllı sözleşmeden oluşacaktır:

NFT Sözleşmesi — Bu sözleşme, kullanıcıların NFT basmasına olanak tanır.

Pazar Yeri Sözleşmesi — Bu sözleşme, kullanıcıların dijital varlıklarını açık bir pazarda satışa sunmalarına olanak tanır.

Birlikte çalışacağımız araçlar, teknikler ve fikirler bu yığındaki diğer birçok uygulama türünün temelini oluşturuyor — ödemeler, komisyonlar ve sözleşme düzeyinde mülkiyet devirleri gibi şeylerle uğraşıyor. Bir istemci tarafı uygulamanın bu akıllı sözleşmeyi, performanslı ve hoş görünümlü bir kullanıcı arayüzü oluşturmak için nasıl görüneceğini göreceksiniz.

Proje Kurulum Adımları
Next.js app imizi oluşturmak için terminali açalım ve aşağıdaki komutu verelim.

    npx create-next-app nft-marketplace

Proje klasörünün içine girin ve bağımlılıkları (dependencies) kuralım.

// dosya içerisine girin

    cd nft-marketplace
// bağımlılıkları kurun
  
    npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client@50.1.2 axios

Tailwind CSS i Kurma

Tailwind, çok fazla iş yapmadan stil eklemeyi ve iyi görünümlü web siteleri oluşturmayı kolaylaştıran, yardımcı program öncelikli bir CSS framework üdür.

    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
Ardından, aşağıdaki komutu çalıştırarak Tailwind’in Next.js ( tailwind.config.jsve ) ile çalışması için gereken yapılandırma dosyalarını oluşturacağız :postcss.config.js

    npx tailwindcss init -p

    /* tailwind.config.js */
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
Son olarak, styles/globals.css içindeki kodu silin ve aşağıdaki ile güncelleyin: fakat yoktur. app/global.css içinde zaten var

@tailwind base;
@tailwind components;
@tailwind utilities;

    npx hardhat  // 5.x kuruyor ama 4.x versiyonu kurulsa daha iyi olur sanki

  Hardhat kendi dosyalarını ve klasörlerini oluşturması gerekir. Ana dizinde yer alan hardhat.config.js dosyasını açın ve aşağıdaki gibi düzenleyin.

      /* hardhat.config.js */
    require("@nomiclabs/hardhat-waffle")
    const fs = require('fs')
    const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
    
    module.exports = {
      defaultNetwork: "hardhat",
      networks: {
        hardhat: {
          chainId: 1337
        },
    // mumbai: {
    // url: "https://rpc-mumbai.maticvigil.com",
    // accounts: [privateKey]
    // }
      },
      solidity: {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    }

  
