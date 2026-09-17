// Philippine Payment Configuration & Price Converters

export type PhilippinePaymentMethod = 'gcash' | 'gotyme' | 'maya' | 'qrph' | 'card';

const PHP_PRICE_MAP: Record<number, number> = {
  29: 1499,
  39: 1999,
  49: 2499,
  59: 2999,
  69: 3499,
  79: 3999,
  89: 4499,
  99: 4999,
  119: 5999,
  149: 7499,
  349: 17490,
};

export const getPhpPrice = (usd: number): number => {
  return PHP_PRICE_MAP[usd] || Math.round(usd * 58);
};

export const formatPhp = (amount: number): string => {
  return `₱${amount.toLocaleString()}`;
};

export const PHILIPPINE_MERCHANT_INFO = {
  accountName: 'KEZJED SOLUTIONS / RONNEL M. AVIGUETERO',
  gotymeAccountNumber: '0183-9482-1049',
  gcashMerchant: 'KEZJED SOLUTIONS (0917-829-3041)',
  mayaHandle: '@kezjed_solutions',
};
