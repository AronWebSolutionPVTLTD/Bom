module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sansation': ['Sansation', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      },
      backgroundImage: {
        'bodyBg': "url('/src/Images/body-bg.jpg')",
        'visionBg': "url('/src/Images/vision-bg.png')",
      },
      maxWidth:{
        "1400":"1400px",
        "1555":"1555px",
      },
      colors:{
        "primary":"#FFB800",
        "blMenu":"#246BFD"
      },
      fontSize: {
        "12":'12px',
        "14":'14px',
        "16":'16px',
        "18":'18px',
        "20":'20px',
        "22":'22px',
        "24":'24px',
        "26":'26px',
        "28":'28px',
        "30":'30px',
        "40":'40px',
        "42":'42px',
        "44":'44px',
        "46":'46px',
        "48":'48px',
        "50":'50px',
      },
      lineHeight: {
        "12":'12px',
        "14":'14px',
        "16":'16px',
        "18":'18px',
        "20":'20px',
        "22":'22px',
        "24":'24px',
        "26":'26px',
        "28":'28px',
        "30":'30px',
        "40":'40px',
        "42":'42px',
        "44":'44px',
        "46":'46px',
        "48":'48px',
        "50":'50px',
      }
    },
    
  },
  plugins: [],
}
