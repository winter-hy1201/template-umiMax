/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  // 解决tailwindcss和antd的冲突
  corePlugins: {
    preflight: false,
  },
};
