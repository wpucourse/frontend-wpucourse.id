const getDayName = (dateStr: string, locale: string) => {
  const date = new Date(dateStr);

  return date.toLocaleDateString(locale, { weekday: 'long' });
};

export const formatDate = (data: string, format: string) => {
  const today = new Date(`${data}`);
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const yyyy = today.getFullYear();
  const dd = today.getDate().toString();
  const mm = monthNames[today.getMonth()];

  let formattedToday = '';
  if (format === 'D MMMM YYYY') {
    formattedToday = `${dd} ${mm} ${yyyy}`;
  } else if (format === 'dName, D MMMM YYYY') {
    const dName = getDayName(data, 'id-ID');
    formattedToday = `${dName}, ${dd} ${mm} ${yyyy}`;
  } else if (format === 'MMMM') {
    formattedToday = `${mm}`;
  }

  return formattedToday;
};

export const getCurrentYear = () => {
  const today = new Date();

  return today.getFullYear();
};

export const getCurrentDateInUTC = () => {
  const date = new Date().toISOString();

  return date;
};
