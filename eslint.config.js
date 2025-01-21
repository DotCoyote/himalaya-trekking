import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['.next/', '.gitignore'],
        files: ['src/**/*.ts'],
    },
    {
        ...js.configs.recommended,
        rules: {
            quotes: ['error', 'single'],
            semi: 'error',
            'no-console': 'error',
        },
    },
    tseslint.configs.recommended,
    eslintConfigPrettier,
);
