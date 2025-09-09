# Satoka dApp Marketplace

Una aplicación descentralizada moderna, responsiva y fácil de usar para visualizar y adquirir criptoactivos registrados en contratos inteligentes como `GhostToken` (moneda utilitaria) y `SatokaNFT` (NFTs simbólicos). El sistema reconoce automáticamente si el usuario es administrador y adapta la interfaz según su rol.

## 🚀 Características

- Visualización dinámica de productos registrados en `ProductManager`
- Integración con MetaMask para autenticación y transacciones
- Interfaz adaptativa para administradores y usuarios comunes
- Registro y mantenimiento de contratos desde la interfaz
- Adquisición de NFTs mediante donaciones en POL o Go
- Recompensas automáticas en GhostToken por contribuciones

## 🧱 Contratos Integrados

- `ProductManager`: Registro y mantenimiento de productos
- `GhostToken`: Moneda utilitaria (Go)
- `SatokaNFT`: NFTs simbólicos con recompensas

## 🛠️ Tecnologías

- React + TypeScript
- Ethers.js
- MetaMask
- GitHub Actions
- IPFS (para metadatos NFT)

## 📦 Instalación

```bash
git clone https://github.com/satoka-dao/marketplace.git
cd marketplace
npm install
npm run dev
