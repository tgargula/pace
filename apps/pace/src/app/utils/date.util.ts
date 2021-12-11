export const getRelativeDayNote = (days: number) => {
  if (days > 1) return `${days} days left`;
  if (days === 1) return '1 day left';
  if (days === 0) return 'Due today';
  if (days === -1) return '1 day overdue';
  return `${-days} days overdue`;
};
