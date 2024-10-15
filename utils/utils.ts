import React from 'react';

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 0xffffff);
};

export const convertDecimalNumberToHexadecimal = (decimalNumber: number) => {
  return decimalNumber.toString(16);
};
