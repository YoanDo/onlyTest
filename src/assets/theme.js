const theme = {
  color: {
    background: '#181818',
    error: '#FF9000',
    grey: '#7A7877',
    highlight: '#AE00FF',
    main: '#F3F0EE',
    success: '#00FFE4',
  },
  fontSize: {
    title: '24px',
    default: '16px',
  },
  transition: {
    default: '0.3s ease-in-out',
  },
  spacing: (x) => `calc(${x}*16px)`,
  colorWithOpacity: (hex, opacity) => {
    const color = hex.replace('#', '');
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    const result = `rgba(${r},${g},${b},${opacity / 100})`;

    return result;
  },
};

export default theme;
