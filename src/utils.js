import numeral from 'numeral';
import { isNumber } from 'lodash';

/**
 * Форматирование суммы
 * @param {string, number} amount - сумма
 * @returns {string} - отформатированная сумма
 */
export const getFormattedAmount = (amount) => {
  const value = parseFloat(amount);
  return (isNumber(value) && !isNaN(value) ? numeral(amount).format('0,0.00') : '');
};