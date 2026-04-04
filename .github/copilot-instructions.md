# AI Coding Agent Instructions

## Architecture Overview

This is a hybrid portfolio application with a Laravel backend (PHP) and Next.js frontend (TypeScript). The backend serves as the API/data layer, while the frontend handles the user interface.

- **Backend**: Laravel 12 framework with standard MVC structure (`app/Models`, `app/Http/Controllers`, `routes/`)
- **Frontend**: Next.js 16 with App Router, TypeScript, and Tailwind CSS v4
- **Data Flow**: Frontend makes API calls to backend endpoints (currently minimal, expand `routes/api.php` for RESTful APIs)
- **Styling**: Tailwind CSS with PostCSS configuration

## Key Workflows

### Development Setup
Run `composer run setup` in `backend/` to initialize environment, generate keys, migrate DB, and install/build frontend.

### Concurrent Development
Use `composer run dev` in `backend/` to start all services simultaneously:
- Laravel server (port 8000)
- Queue worker
- Log tailing
- Vite dev server for frontend assets

### Testing
- Backend: `composer run test` (runs PHPUnit with config clear)
- Frontend: `npm run lint` (ESLint)

### Building
- Backend: Use `php artisan` commands for migrations, cache, etc.
- Frontend: `npm run build` for production build

## Conventions & Patterns

### Backend (Laravel)
- Use Eloquent ORM for database interactions (see `app/Models/User.php`)
- Follow PSR-4 autoloading (`App\` namespace)
- Migrations in `database/migrations/` for schema changes
- Seeders in `database/seeders/` for test data
- Controllers extend base `Controller.php`

### Frontend (Next.js)
- App Router structure: `app/` for pages, `app/(dashboard)/` for protected routes
- Components in `components/` with subfolders: `ui/`, `forms/`, `shared/`
- Hooks in `hooks/` for custom logic
- Types in `types/` (currently empty, add interfaces here)
- Use TypeScript strict mode (see `tsconfig.json`)

### Code Quality
- Backend: Laravel Pint for code formatting
- Frontend: ESLint with Next.js config
- No custom linting rules yet - follow standard practices

## Integration Points

- Frontend imports backend via API calls (add routes in `backend/routes/api.php`)
- Shared types: Define in `frontend/types/` and import in both sides if needed
- Environment: Use `.env` files for configuration (backend has `.env.example`)

## File Structure Highlights

- `backend/app/Models/`: Eloquent models
- `backend/routes/web.php`: Web routes (currently basic welcome)
- `frontend/app/page.tsx`: Main homepage
- `frontend/components/ui/`: Reusable UI components
- `frontend/lib/`: Utility functions

Focus on building RESTful APIs in Laravel and consuming them in Next.js components.</content>
<parameter name="filePath">.github/copilot-instructions.md