module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sansation': ['Sansation', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'bodyBg': "url('/src/Images/body-bg.jpg')",
        'visionBg': "url('/src/Images/vision-bg.png')",
      },
      borderRadius: {
        "10":"10px"
      },
      maxWidth:{
        "400":"400px",
        "450":"450px",
        "500":"500px",
        "510":"510px",
        "520":"520px",
        "530":"530px",
        "500":"500px",
        "560":"560px",
        "1400":"1400px",
        "1555":"1555px",
      },
      colors:{
        "primary":"#FFB800",
        "blMenu":"#246BFD",
        "grLeft":"#FBDB03",
        "grRight":"#FA9113"
      },
      fontSize: {
        "12":'12px',
        "14":'14px',
        "16":'16px',
        "18":'18px',
        "20":'20px',
        "22":'22px',
        "24":'24px',
        "25":'25px',
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
