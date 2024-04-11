export function formatDate(rawDate: Date): string {
  const date = new Date(rawDate);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('sl-SI', options);

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}
