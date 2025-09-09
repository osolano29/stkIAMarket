
---

## 🤝 `CONTRIBUTING.md`

```markdown
# Contribuir al Satoka dApp Marketplace

Gracias por tu interés en contribuir. Este proyecto combina arte, blockchain y filosofía. Aquí te explicamos cómo colaborar.

## 🧭 Estructura del Proyecto

- `/src`: Código fuente React + TypeScript
- `/contracts`: Interfaces y direcciones de contratos
- `/assets`: Imágenes y metadatos NFT
- `/utils`: Funciones auxiliares para conversión, validación y conexión Web3

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
