module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'phone': "url('../assets/images/bg_phone.png')",
        'tablet': "url('../assets/images/bg_tablet.png')",
      },
      colors: {
        'yellow-custom': '#F7DA84',
        'gradient-r': '#FDD77E',
        'gradient-l': '#FEFAF0',
        'gradient-bg-r': '#F7DB86',
        'gradient-bg-l': '#EBEFC6',
        'input': '#3D3A49',
        'info-txt': '#696B7C',
        'info-bg': '#242337',
        'nbr-bg': '#1E2528',
        'active': '#FEFAF0',
      },
      dropShadow: {
        'title': '0px 0px 1.5px #F7DA84',
      },
    },
  },
  plugins: [],
}