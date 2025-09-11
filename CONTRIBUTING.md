
---

## 🤝 `CONTRIBUTING.md`

```markdown
# Contribuir al Satoka dApp Marketplace

Gracias por tu interés en contribuir. Este proyecto combina arte, blockchain y filosofía. Aquí te explicamos cómo colaborar.

## 🧭 Estructura del Proyecto

- `src`: Código fuente React + TypeScript
- `src/components/`: Componentes visuales del dApp
- `src/hooks/`: Hooks personalizados por contrato
- `docs/`: Documentación técnica de contratos
- `.vscode/`: Configuración de entorno (settings.json, extensions.json)
- `contracts`: ABIs, funciones de conexión, Interfaces y direcciones de contratos
- `assets`: Imágenes y metadatos NFT
- `utils`: Funciones auxiliares para conversión, validación, formato y conexión Web3

## 🧠 Reglas de generación de código (React + Node.js)

Este proyecto sigue prácticas modernas para asegurar calidad, seguridad y claridad en el desarrollo:

- Todos los contratos tienen administradores (dueños del contrato) y usuarios comunes. La lógica debe respetar esta distinción.
- Se usa sintaxis ES6+ (arrow functions, async/await, destructuring).
- La estructura del proyecto debe tener clara separación por carpetas (e.g., `components/`, `hooks/`, `contracts/`, `utils/`).
- Validar entradas y manejar errores en todas las funciones críticas.
- Usar variables de entorno para configuración (`.env`).
- Incluir comentarios explicativos en funciones no triviales.
- Documentar cómo correr el proyecto y cómo usar los componentes.
- Instalar todas las dependencias necesarias (`npm install`).
- Incluir `.gitignore` para Node.js y evitar subir archivos innecesarios.
- Emplear componentes funcionales con hooks (`useState`, `useEffect`, `useContext`, `useReducer`).
- Evitar lógica compleja en JSX; extraer funciones auxiliares.
- Usar tipado estricto en TypeScript (`noImplicitAny`, `strictNullChecks`).
- Mantener consistencia en nombres de variables y funciones (camelCase).

## 📚 Referencia técnica de contratos

Para colaborar de forma efectiva y generar código que respete la lógica del sistema, consulta los siguientes archivos en la carpeta `docs/`:

- [`ProductManager.md`](docs/ProductManager.md): Define cómo se registran y mantienen los productos del marketplace.
- [`GhostToken.md`](docs/GhostToken.md): Explica la lógica de recompensas, minteo y transferencias de la moneda Go.
- [`SatokaNFT.md`](docs/SatokaNFT.md): Detalla los tipos de NFTs, sus metadatos, recompensas y funciones de adquisición.

Estas especificaciones deben guiar la generación de componentes React, hooks personalizados, validaciones y vistas condicionales según el rol del usuario.

## 🧠 IA y Issues

Los issues están redactados para facilitar el trabajo de IA. Por favor, mantén este estilo al crear nuevos.

## 🧪 Tests

Usamos Jest para pruebas unitarias. Cada componente debe tener cobertura mínima del 80%.

## 🧼 Estilo de Código

- TypeScript estricto
- Hooks funcionales
- Componentes desacoplados
- Validación de props y estados

## 🛡️ Seguridad

- Validar direcciones antes de transacciones
- Evitar hardcoded keys
- Usar try/catch en llamadas Web3

## 🧙‍♂️ Roles

- **Administrador**: Detectado por `esAdmin()` en `ProductManager`
- **Usuario común**: Acceso limitado a funciones de visualización y adquisición

## 📬 Contacto

Para dudas filosóficas, técnicas o simbólicas, abre un issue o contacta al equipo de Satoka DAO.
