import { v4 as uuidv4 } from "uuid";

export function generateUUID() {
  return uuidv4();
}

export const generateRandomData = (
  months: string[],
  days: number,
  minValue: number,
  maxValue: number,
): {
  name: string;
  date: string;
  value: number;
}[] => {
  const data: {
    name: string;
    date: string;
    value: number;
  }[] = [];

  months.forEach((month) => {
    for (let day = 1; day <= days; day++) {
      const randomValue = Math.floor(
        Math.random() * (maxValue - minValue + 1) + minValue,
      );
      data.push({
        name: month,
        date: day.toString().padStart(2, "0"),
        value: randomValue,
      });
    }
  });

  return data;
};

const getMonths = (labelType: "short" | "long" | "numeric" = "short"): string[] => {
  return new Array(12).fill(null).map((_: null, i: number) => new Date(0, i).toLocaleString("en-us", { month: labelType }));
};

export const generateExpensesData = () => {
  const months = getMonths();
  const weeks = ["This week", "Last week"];
  const data: {
    name: string;
    date: string;
    value: number;
  }[] = [];

  weeks.forEach((week: string) => {
    months.forEach((month: string) => {
      const randomValue = Math.floor(Math.random() * 800);

      data.push({
        name: week,
        date: month,
        value: randomValue,
      });
    });
  });

  return data;
};