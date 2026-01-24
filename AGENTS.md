# Repository Guidelines

## Project Structure & Module Organization
- `src/` is the main app (Vue 3 + TypeScript). Key areas: `src/components/`, `src/ui/`, `src/composable/`, `src/stores/`, `src/utils/`, `src/pages/`, `src/layouts/`, and `src/tools/`.
- Tools live in `src/tools/<tool-name>/` and are typically kebab-case. Use the generator to scaffold new tools.
- Static files go in `public/`, app assets in `src/assets/`, and translations in `locales/*.yml`.
- Build/test config lives at the repo root (`vite.config.ts`, `playwright.config.ts`, `tsconfig*.json`, `unocss.config.ts`).

## Build, Test, and Development Commands
- `pnpm install --ignore-scripts`: install dependencies (project defaults to pnpm).
- `pnpm dev`: start Vite dev server.
- `pnpm build`: type-check with `vue-tsc` and build for production.
- `pnpm preview -- --port 5050`: preview the production build locally.
- `pnpm lint`: run ESLint across `src/`.
- `pnpm typecheck`: run `vue-tsc` with the Vitest tsconfig.
- `pnpm test`: run unit tests (Vitest, UTC timezone).
- `pnpm test:e2e`: run Playwright end-to-end tests.
- `pnpm run script:create:tool my-tool-name`: scaffold a new tool in `src/tools/`.

## Coding Style & Naming Conventions
- Formatting is handled by Prettier (`.prettierrc`): 2-space indent, single quotes, semicolons, trailing commas, `printWidth: 120`.
- Linting is enforced via ESLint (`.eslintrc.cjs`).
- Keep tool folder names in kebab-case (e.g., `src/tools/json-to-csv/`).

## Testing Guidelines
- Unit tests live alongside code as `*.test.ts` (and `*.models.test.ts`/`*.service.test.ts`).
- E2E tests use Playwright and are named `*.e2e.spec.ts`.
- Use `pnpm test` for unit tests, `pnpm test:e2e` for E2E, and `pnpm coverage` for coverage runs.

## Commit & Pull Request Guidelines
- Create a new branch for every update (e.g., `git checkout -b feature/my-change`).
- Follow the existing commit style: `feat`, `fix`, `chore`, `docs`, `i18n`, with optional scopes (e.g., `feat(new tool): ...`).
- Keep commit subjects short and imperative.
- PRs should describe changes clearly, link relevant issues, and include screenshots for UI changes.

## Configuration Tips
- Use `.nvmrc` to align Node versions and `pnpm` as the package manager.
- For sub-path deployments, set `BASE_URL` (e.g., `BASE_URL="/it-tools/" pnpm build`).
