// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * Exits immediately with the given `exitCode`.
 * @example
 * ```typescript
 * import { exit } from '@tauri-apps/plugin-process';
 * await exit(1);
 * ```
 *
 * @param code The exit code to use.
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 2.0.0
 */
async function exit(code = 0) {
    return window.__TAURI_INVOKE__("plugin:process|exit", { code });
}
/**
 * Exits the current instance of the app then relaunches it.
 * @example
 * ```typescript
 * import { relaunch } from '@tauri-apps/plugin-process';
 * await relaunch();
 * ```
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 2.0.0
 */
async function relaunch() {
    return window.__TAURI_INVOKE__("plugin:process|restart");
}

export { exit, relaunch };
//# sourceMappingURL=index.mjs.map
