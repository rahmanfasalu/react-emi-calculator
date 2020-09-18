import { EmiInfo } from "src/interfaces/emi.info";

export const calculateIntrest = () => {
  return 100;
};

// on month emi
export const emiInformation = (p: number, r: number, t: number): EmiInfo => {
  let emi: number;
  const amountPerMonth = p / (t * 12);
  r = r / (12 * 100); // one month interest
  t = t * 12; // one month period
  emi = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
  emi = Math.round(emi);

  const intrestInaMonth = emi - amountPerMonth;
  const totalPayable = emi * t;
  const totalIntrest = totalPayable - p;

  return {
    emi: emi,
    monthlyIntrest: intrestInaMonth,
    totalPayable: totalPayable,
    totalPayableIntrest: totalIntrest,
  };
};

export const getMortageDetails = (
  emiInfo: EmiInfo,
  amount: number,
  year: number
) => {
  const years: number[] = Array.from({ length: year }, (_, i) => i + 1);
  const schedules: any = [];
  let openingBalance = amount;
  let intrestPaid = 0;
  let principalPaidPerYear = 0;
  let intrestPerYear = Math.round(emiInfo.monthlyIntrest * 12);

  years.forEach((year) => {
    intrestPaid = intrestPaid + intrestPerYear;
    principalPaidPerYear =
      principalPaidPerYear + (emiInfo.emi - emiInfo.monthlyIntrest) * 12;
    let closingBalance = openingBalance - (emiInfo.emi * 12 - intrestPerYear);

    schedules.push({
      year: year,
      openingBalance: openingBalance,
      emi: Math.round(emiInfo.emi * 12),
      intrestPerYear: intrestPaid,
      principalPaid: Math.round(principalPaidPerYear),
      closingBalance: closingBalance <= 1 ? 0 : closingBalance,
    });

    openingBalance = openingBalance - (emiInfo.emi * 12 - intrestPerYear);
  });

  return { schedules: schedules };
};
