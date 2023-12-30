import { WineData, classWiseArrays, ClassWiseStatistics} from "../interfaces/interface";
// function to calculate the mean.
// formula (total/lenght = mean)
const calculateMean = (arr: number[]): number => {
    const sum = arr.reduce((acc, value) => acc + value, 0);
    return sum / arr.length;
}

// Function to calculate the median
// n = lenght/2
// if mid is odd then median = ((n+1)/2)th term
// if mid is even then median = (((n)/2)th term + (n/2 +1)the term)/2
const calculateMedian = (arr: number[]): number => {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
  
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
      return sortedArr[mid];
    }
}

// Function to calculate the mode
// maximum occurrence of of same value 
const calculateMode = (arr: number[]): number => {
    const countMap = new Map();
  
    arr.forEach((value) => {
      countMap.set(value, (countMap.get(value) || 0) + 1);
    });
  
    let mode = 0;
    let maxCount = 0;
  
    countMap.forEach((count, value) => {
      if (count > maxCount) {
        mode = value;
        maxCount = count;
      }
    });
  
    return mode;
}

// Function to calculate class-wise mean, median, and mode of any input property("Flavanoids" | "Gamma")
export const calculateStatistics = (dataSet: WineData[], property: keyof WineData): ClassWiseStatistics => {
    const classWiseData: classWiseArrays = {};
    
    dataSet.forEach((entry: WineData) => {
      const alcoholClass: number = entry["Alcohol"];
  
      if (!classWiseData[alcoholClass!]) {
        classWiseData[alcoholClass!] = [];
      }

      const propertyValue = entry[property];

      if (propertyValue !== undefined) {
        classWiseData[alcoholClass!].push(parseFloat(propertyValue as string));
      }
    });
    
    

    const classWiseStatistics: ClassWiseStatistics = {};
    for (const [alcoholClass, flavanoidsData] of Object.entries(classWiseData)) {
      classWiseStatistics[alcoholClass] = {
        mean: calculateMean(flavanoidsData),
        median: calculateMedian(flavanoidsData),
        mode: calculateMode(flavanoidsData),
      };
    }

    return classWiseStatistics;
}

// Calculate Gamma for each from the diven dataset
export const getGamaDataSet = (dataSet: WineData[]): WineData[] => {
    dataSet.forEach((entry) => {
        const { Ash, Hue, Magnesium } = entry;
        entry.Gamma = (Number(Ash) * Number(Hue)) / Magnesium;
    });

    return dataSet
}
