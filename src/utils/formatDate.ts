import { parseISO } from 'date-fns';

interface Date {
  day: string;
  month: string;
  year: string;
}

const formatDate = (date: string): string => {
  const parsedDate = parseISO(date);
  const day = parsedDate.getDay();
  const month = parsedDate.getMonth();
  const year = parsedDate.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${formattedDay}/${formattedMonth}/${year}`;
};

export default formatDate;
