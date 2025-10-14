module.exports = {
  preset: 'react-native',
  collectCoverage:true,
  coverageDirectory:'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts, tsx}',
    'src/components/TestComponent.tsx',
    'App.tsx',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
