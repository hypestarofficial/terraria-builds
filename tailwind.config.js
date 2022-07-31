module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      rotate: {
        150: '150deg',
      },
      height: {
        50: '12.5rem',
      },
      colors: {
        preBosses: '#ffffff',
        preEater: '#5a00ff',
        preBrain: '#ff8a86',
        preSkeletron: '#bfbfbf',
        preWall: '#9d0000',
        preMechanical: '#dddddd',
        prePlanteraa: '#00a000',
        preGolem: '#d16900',
        preCultist: '#4343ff',
        preMoonLord: '#00b7a5',
        preProvidence: '#ffcc01',
        prePolterghast: '#97ebff',
        preDevourer: '#7f0c92',
        preYahron: '#c39700',
        preCalamitas: '#fd0000',
        endGame: '#00005b',
      },
    },
  },
  plugins: [],
};
