'use strict';

var core = require('@tauri-apps/api/core');

// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * Perform operations on the current process.
 * @module
 */
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
    return core.invoke("plugin:process|exit", { code });
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
    return core.invoke("plugin:process|restart");
}

exports.exit = exit;
exports.relaunch = relaunch;
