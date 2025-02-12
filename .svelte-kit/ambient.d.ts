
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const MANPATH: string;
	export const ZELLIJ: string;
	export const ZLE_RPROMPT_INDENT: string;
	export const npm_package_scripts_tauri: string;
	export const NODE: string;
	export const POSH_SHELL: string;
	export const NVM_CD_FLAGS: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_typescript: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_devDependencies_vite: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const WINDOWID: string;
	export const npm_package_scripts_dev: string;
	export const TAURI_CLI_VERBOSITY: string;
	export const TAURI_ENV_DEBUG: string;
	export const npm_package_dependencies__tauri_apps_api: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_registry: string;
	export const ZSH: string;
	export const POWERLINE_COMMAND: string;
	export const PNPM_HOME: string;
	export const USER: string;
	export const POSH_SESSION_ID: string;
	export const NVM_DIR: string;
	export const npm_package_description: string;
	export const TAURI_ENV_TARGET_TRIPLE: string;
	export const LS_COLORS: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_license: string;
	export const COMMAND_MODE: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const TAURI_ENV_PLATFORM: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const LSCOLORS: string;
	export const npm_config_frozen_lockfile: string;
	export const PATH: string;
	export const __CFBundleIdentifier: string;
	export const TAURI_ENV_PLATFORM_VERSION: string;
	export const TAURI_ENV_FAMILY: string;
	export const PWD: string;
	export const npm_command: string;
	export const npm_package_scripts_preview: string;
	export const KITTY_PID: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const POSH_SHELL_VERSION: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const XPC_FLAGS: string;
	export const TAURI_ENV_ARCH: string;
	export const ZELLIJ_PANE_ID: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const SHLVL: string;
	export const HOME: string;
	export const npm_package_type: string;
	export const TERMINFO: string;
	export const OSTYPE: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_package_dependencies__tauri_apps_plugin_opener: string;
	export const MACOSX_DEPLOYMENT_TARGET: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const npm_package_devDependencies__tauri_apps_cli: string;
	export const npm_lifecycle_script: string;
	export const NVM_BIN: string;
	export const KITTY_WINDOW_ID: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_config_user_agent: string;
	export const RAINFROG_CONFIG: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const BAT_THEME: string;
	export const POSH_THEME: string;
	export const npm_package_scripts_check: string;
	export const ZELLIJ_SESSION_NAME: string;
	export const KITTY_PUBLIC_KEY: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		MANPATH: string;
		ZELLIJ: string;
		ZLE_RPROMPT_INDENT: string;
		npm_package_scripts_tauri: string;
		NODE: string;
		POSH_SHELL: string;
		NVM_CD_FLAGS: string;
		INIT_CWD: string;
		npm_package_devDependencies_typescript: string;
		TERM: string;
		SHELL: string;
		npm_package_devDependencies_vite: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		CONDA_PROMPT_MODIFIER: string;
		WINDOWID: string;
		npm_package_scripts_dev: string;
		TAURI_CLI_VERBOSITY: string;
		TAURI_ENV_DEBUG: string;
		npm_package_dependencies__tauri_apps_api: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_registry: string;
		ZSH: string;
		POWERLINE_COMMAND: string;
		PNPM_HOME: string;
		USER: string;
		POSH_SESSION_ID: string;
		NVM_DIR: string;
		npm_package_description: string;
		TAURI_ENV_TARGET_TRIPLE: string;
		LS_COLORS: string;
		npm_package_scripts_check_watch: string;
		npm_package_license: string;
		COMMAND_MODE: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		TAURI_ENV_PLATFORM: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		LSCOLORS: string;
		npm_config_frozen_lockfile: string;
		PATH: string;
		__CFBundleIdentifier: string;
		TAURI_ENV_PLATFORM_VERSION: string;
		TAURI_ENV_FAMILY: string;
		PWD: string;
		npm_command: string;
		npm_package_scripts_preview: string;
		KITTY_PID: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		POSH_SHELL_VERSION: string;
		LANG: string;
		npm_package_name: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		XPC_FLAGS: string;
		TAURI_ENV_ARCH: string;
		ZELLIJ_PANE_ID: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies_svelte_check: string;
		SHLVL: string;
		HOME: string;
		npm_package_type: string;
		TERMINFO: string;
		OSTYPE: string;
		HOMEBREW_PREFIX: string;
		npm_package_dependencies__tauri_apps_plugin_opener: string;
		MACOSX_DEPLOYMENT_TARGET: string;
		LOGNAME: string;
		LESS: string;
		npm_package_devDependencies__tauri_apps_cli: string;
		npm_lifecycle_script: string;
		NVM_BIN: string;
		KITTY_WINDOW_ID: string;
		KITTY_INSTALLATION_DIR: string;
		npm_config_user_agent: string;
		RAINFROG_CONFIG: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		BAT_THEME: string;
		POSH_THEME: string;
		npm_package_scripts_check: string;
		ZELLIJ_SESSION_NAME: string;
		KITTY_PUBLIC_KEY: string;
		COLORTERM: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
