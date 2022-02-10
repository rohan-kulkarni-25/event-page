module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'ebony': {
          DEFAULT: '#0D1021',
          '50': '#4150A5',
          '100': '#3B4996',
          '200': '#303B79',
          '300': '#242C5C',
          '400': '#191E3E',
          '500': '#0D1021',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'pampas': {
          DEFAULT: '#FAF9F8',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#FAF9F8',
          '600': '#E3DDD7',
          '700': '#CBC1B7',
          '800': '#B4A596',
          '900': '#9C8975'
        }, 'cornflower-purple': {
          DEFAULT: '#796FF6',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#E4E2FD',
          '300': '#C0BCFB',
          '400': '#9D95F8',
          '500': '#796FF6',
          '600': '#483AF3',
          '700': '#1E0EE6',
          '800': '#170BB2',
          '900': '#10087D'
        },
        'cornflower-blue': {
          DEFAULT: '#71A5ED',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#DEEAFB',
          '300': '#B9D3F6',
          '400': '#95BCF2',
          '500': '#71A5ED',
          '600': '#3F85E7',
          '700': '#1B68D3',
          '800': '#144FA1',
          '900': '#0E376F'
        }, 'screamin-green': {
          DEFAULT: '#6BFC76',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#E3FEE5',
          '300': '#BBFEC0',
          '400': '#93FD9B',
          '500': '#6BFC76',
          '600': '#34FB43',
          '700': '#05F217',
          '800': '#04BB12',
          '900': '#03840C'
        },
        'gravel': {
          DEFAULT: '#575159',
          '50': '#B3ADB4',
          '100': '#A9A2AB',
          '200': '#958D97',
          '300': '#817884',
          '400': '#6C646E',
          '500': '#575159',
          '600': '#3A363C',
          '700': '#1E1C1E',
          '800': '#010101',
          '900': '#000000'
        },
        'chatelle': {
          DEFAULT: '#BBADCA',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#F9F7FA',
          '300': '#E4DFEA',
          '400': '#D0C6DA',
          '500': '#BBADCA',
          '600': '#9F8BB4',
          '700': '#82699E',
          '800': '#67517E',
          '900': '#4B3B5B'
        },
        'coral-tree': {
          DEFAULT: '#AF7771',
          '50': '#F1E7E6',
          '100': '#EADBD9',
          '200': '#DBC2BF',
          '300': '#CCA9A5',
          '400': '#BE908B',
          '500': '#AF7771',
          '600': '#945A54',
          '700': '#70443F',
          '800': '#4D2E2B',
          '900': '#291917'
        },

      },
      spacing:{
        200:'50rem',
        160:'40rem',
        192:'48rem',
        240:'60rem',
        288:'72rem'
      },
    },
    backgroundImage: {        'event': "url('./events.svg')"  ,"plant":"url('./plant.svg')"    },
    fontFamily:{
      'sans-serif':['inter', 'sans-serif']
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
