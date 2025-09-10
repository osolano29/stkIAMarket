# 🧱 ProductManager

Contrato central que registra y mantiene productos simbólicos dentro del ecosistema Satoka. Cada producto representa un criptoactivo con propósito narrativo y técnico.

## 🔐 Roles

- **Administrador**: Dueño del contrato, con permisos para registrar y modificar productos.
- **Usuario común**: Puede consultar productos, pero no modificarlos.

## 🧩 Funciones principales

### `esAdmin() → bool`
Determina si la dirección que invoca es el dueño del contrato.

### `getTotal() → uint256`
Devuelve el total de productos registrados.

### `getProducts() → address[]`
Lista todas las direcciones de productos registrados.

### `getProductInfo(address)`
Devuelve:
- `name`: Nombre del producto
- `website`: Sitio web asociado
- `purpose`: Propósito simbólico
- `contractType`: Tipo de contrato (0: Unknown, 1: ERC20, 2: ERC1155)
- `status`: Estado operativo

### `setProduct(...) → bool`
Registra un nuevo producto con su información completa.

### `updateProduct(...) → bool`
Actualiza la información de un producto existente.

### `updateProductStatus(...) → bool`
Activa o desactiva un producto. El estado desactivado indica que no está operativo.

