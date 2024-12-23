import sharedConfig from '@repo/tailwind-config'

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend : {
      backgroundImage: {
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #fcba03 180deg, #e92a67 360deg)",
      },
    },
  },
  presets: [sharedConfig],
};