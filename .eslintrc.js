module.exports = {
  extends: ['airbnb-typescript/base',
	'plugin:@typescript-eslint/recommended',
],
  overrides: [
    {
      files: ['*.ts', '*.test.ts'],
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
      },
    }
  ],
	rules: {
		"no-console": "off",
	},
	parser: '@typescript-eslint/parser',	
};

