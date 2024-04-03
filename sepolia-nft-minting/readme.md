## 1. Adım
Bu komutlar, yeni bir package.json dosyası oluşturacak ve Hardhatı yerel olarak projenize kuracaktır.

    mkdir sepolia-nft-minting && cd sepolia-nft-minting

Hardhatı başlat
Bu komutlar, yeni bir package.json dosyası oluşturacak ve Hardhatı yerel olarak projenize kuracaktır.

    npm init -y
    npm install --save-dev hardhat

## 2. Adım: Hardhat Projesini Başlatma
Hardhat projesini başlatmak için aşağıdaki komutu çalıştırın:

    npx hardhat
"Create an empty hardhat.config.js" seçeneğini seçin, böylece projeniz için boş bir Hardhat yapılandırma dosyası (hardhat.config.js) oluşturulacak.

Kurulum sihirbazı tamamlandığında, projenizde aşağıdaki temel dosyalar oluşturulmuş olacak:

  hardhat.config.js: Hardhat yapılandırma dosyasıdır ve Hardhat'ın nasıl çalışacağını belirler.
  package.json: Node.js projenizin bağımlılıklarını ve betiklerini içerir.
  node_modules/: Projede kullandığınız npm paketlerini içeren dizindir.

## 3. Adım: Akıllı Kontratları Oluşturma
  Akıllı kontratlarınızı içerecek bir contracts dizini oluşturun (eğer henüz yoksa):
  contracts dizinine gidin ve bir Solidity dosyası oluşturun. Örneğin, bir NFT kontratı için MyNFT.sol adında bir dosya oluşturabilirsiniz:

    mkdir contracts
    cd contracts
    touch MyNFT.sol
    
MyNFT.sol dosyasını açın ve NFT akıllı kontratınızı yazın. ERC-721 standardına uygun basit bir NFT kontratı örneği aşağıda verilmiştir:
plaintext

  // SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;
  
  import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
  import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
  import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
  import "@openzeppelin/contracts/access/Ownable.sol";
  
  contract MyNFT is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
      constructor() ERC721("MyNFT", "MNFT") {}
  
      function _beforeTokenTransfer(address from, address to, uint256 tokenId)
          internal
          override(ERC721, ERC721Enumerable)
      {
          super._beforeTokenTransfer(from, to, tokenId);
      }
  
      function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
          super._burn(tokenId);
      }
  
      function tokenURI(uint256 tokenId)
          public
          view
          override(ERC721, ERC721URIStorage)
          returns (string memory)
      {
          return super.tokenURI(tokenId);
      }
  
      function safeMint(address to, uint256 tokenId, string memory uri) public onlyOwner {
          _safeMint(to, tokenId);
          _setTokenURI(tokenId, uri);
      }
  
      // The following functions are overrides required by Solidity.
      function supportsInterface(bytes4 interfaceId)
          public
          view
          override(ERC721, ERC721Enumerable)
          returns (bool)
      {
          return super.supportsInterface(interfaceId);
      }
  }
Bu kod, OpenZeppelin kütüphanesinden ERC721 ve diğer ilgili sözleşmeleri içe aktarır ve temel NFT işlevselliğini sağlar. safeMint fonksiyonu, yalnızca kontrat sahibinin yeni NFT'ler oluşturmasına izin verir.

OpenZeppelin kontratlarını projenize eklemek için npm kullanarak gerekli paketleri yükleyin:
bash
copy
npm install @openzeppelin/contracts
Bu paketler, ERC721 ve diğer güvenlik özellikleri gibi standart akıllı kontrat şablonlarını içerir.

Akıllı kontratınızı derlemek için Hardhat kullanın:
bash
copy
npx hardhat compile
Bu komut, contracts dizinindeki Solidity dosyalarını derleyecek ve artifacts dizininde derleme çıktılarını oluşturacaktır.

Bu adımları tamamladığınızda, akıllı kontratınızın derlenmesi gerekiyor olacak. Eğer herhangi bir hata ile karşılaşırsanız, hataların nedenlerini ve çözümlerini incelemek için derleyicinin çıktısını kontrol edin



