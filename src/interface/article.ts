export type DetailType = {
  id: string;
  type: string;
  class: string;
  data: any | TableType | GraphType | LinkType;
};

export type TableType = {
  tableThread: string[];
  tableBody: string[][];
};

export type LinkType = {
  id: string;
};

export type GraphType = {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
};
