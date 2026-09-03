/**
 * The one place the visible product name is written as a bare word, rather
 * than duplicated as a literal in every component that names the application.
 *
 * The application adopted SOMYUREN as its product name and bundle identifier
 * in `feat(identity)` (M3). That change covered the window title copy, the
 * progress copy, the About panel copy and `tauri.conf.json`, but three
 * surfaces still rendered the old working name as a hardcoded literal: the
 * native window title, the boot-splash wordmark and the About panel's
 * application name. They now read from here, so the name is stated once.
 *
 * ST-IA remains the project's historical working name and is deliberately
 * kept in build-only identifiers (the Cargo package `st-ia`, the crate
 * `st_ia_lib`, the npm package name and the `[st-ia]` log prefix) and in the
 * historical record. Those are invisible to users; this is not.
 */
export const PRODUCT_NAME = "SOMYUREN";
