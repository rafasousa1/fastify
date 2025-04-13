import eslintPluginTs from '@typescript-eslint/eslint-plugin'

export default [
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		plugins: {
			'@typescript-eslint': eslintPluginTs
		},
		rules: {
			'quotes': ['error', 'single'], // Aspas simples
			'semi': ['error', 'never'], // Sem ponto e vírgula
			'comma-dangle': ['error', 'never'], // Nunca usar vírgula no final
			'indent': ['error', 'tab'], // Usa tabulação para indentação
			'prefer-arrow-callback': 'off', // Não força uso de arrow functions
			'prefer-const': 'off', // Não força uso de const
			'no-console': 'off' // Permite console.log
		}
	}
]
