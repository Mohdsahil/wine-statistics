export interface WineData {
    Alcohol: number; // Add the correct type for Alcohol, it seems to be missing in the provided data
    "Malic Acid": number;
    Ash: number | string; // in given dataset this key vale string value
    "Alcalinity of ash": number;
    Magnesium: number;
    "Total phenols": number;
    Flavanoids: number | string; // in given dataset this key vale string value
    Gamma?: number;
    "Nonflavanoid phenols": number | string; // in given dataset this key vale string value
    Proanthocyanins: string; 
    "Color intensity": number | string; // in given dataset this key vale string value
    Hue: number;
    "OD280/OD315 of diluted wines": number | string;  // in given dataset this key vale string value
    Unknown: number;
}

export interface classWiseArrays {
    [key: string]: number[];
}

export interface Statistics {
    mean: number;
    median: number;
    mode: number;
}

export interface ClassWiseStatistics {
    [key: string] : {
        mean: number;
        median: number;
        mode: number;
    }
}