# Portfolio Híbrido

Este repositorio contiene un portafolio híbrido con backend en Laravel y frontend en Next.js. El backend sirve como capa de API y datos, mientras que el frontend construye la interfaz de usuario.

## Estructura principal

- `backend/`: Aplicación Laravel 12
  - `app/Models/`: Modelos Eloquent
  - `app/Http/Controllers/`: Controladores HTTP
  - `database/`: Migraciones y seeders
  - `routes/`: Rutas de la aplicación
  - `tests/`: Pruebas unitarias y de funcionalidad

- `frontend/`: Aplicación Next.js 16 con TypeScript y Tailwind CSS
  - `app/`: Rutas y páginas de la aplicación
  - `components/`: Componentes UI reutilizables
  - `hooks/`: Hooks personalizados
  - `lib/`: Utilidades y lógica compartida
  - `public/`: Archivos estáticos

## Requisitos

- PHP 8.3+ y Composer
- Node.js 20+ y npm
- MySQL u otra base de datos compatible con Laravel

## Configuración rápida

### Backend

1. Copia el archivo de entorno:
   ```bash
   cp backend/.env.example backend/.env
   ```
2. Instala dependencias:
   ```bash
   cd backend
   composer install
   ```
3. Genera la clave de aplicación y ejecuta migraciones:
   ```bash
   php artisan key:generate
   php artisan migrate
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   php artisan serve
   ```

### Frontend

1. Instala dependencias:
   ```bash
   cd frontend
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Notas

- El frontend consume APIs desde el backend, por lo que debes tener ambos servidores ejecutándose durante el desarrollo.
- Usa `composer run setup` dentro de `backend/` si deseas una configuración automatizada del entorno.

## Convenciones

- `frontend/` usa App Router de Next.js y Tailwind CSS v4.
- `backend/` sigue convenciones estándar de Laravel y PSR-4.

---

Creado para documentar el proyecto y facilitar el arranque del entorno local.