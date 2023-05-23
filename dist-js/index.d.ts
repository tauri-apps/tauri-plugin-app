/**
 * Get application metadata.
 *
 * @module
 */
declare global {
    interface Window {
        __TAURI_INVOKE__: <T>(cmd: string, args?: unknown) => Promise<T>;
    }
}
/**
 * Gets the application version.
 * @example
 * ```typescript
 * import { getVersion } from '@tauri-apps/plugin-app';
 * const appVersion = await getVersion();
 * ```
 *
 * @since 1.0.0
 */
declare function getVersion(): Promise<string>;
/**
 * Gets the application name.
 * @example
 * ```typescript
 * import { getName } from '@tauri-apps/plugin-app';
 * const appName = await getName();
 * ```
 *
 * @since 1.0.0
 */
declare function getName(): Promise<string>;
/**
 * Gets the Tauri version.
 *
 * @example
 * ```typescript
 * import { getTauriVersion } from '@tauri-apps/plugin-app';
 * const tauriVersion = await getTauriVersion();
 * ```
 *
 * @since 1.0.0
 */
declare function getTauriVersion(): Promise<string>;
/**
 * Shows the application on macOS. This function does not automatically focus any specific app window.
 *
 * @example
 * ```typescript
 * import { show } from '@tauri-apps/plugin-app';
 * await show();
 * ```
 *
 * @since 1.2.0
 */
declare function show(): Promise<void>;
/**
 * Hides the application on macOS.
 *
 * @example
 * ```typescript
 * import { hide } from '@tauri-apps/plugin-app';
 * await hide();
 * ```
 *
 * @since 1.2.0
 */
declare function hide(): Promise<void>;
export { getName, getVersion, getTauriVersion, show, hide };
