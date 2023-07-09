import { GraphDatasetType, GraphType } from "@/interface/article";

export function checkAndResetGraph({ data }: { data: GraphType }) {
  return (
    data === null ||
    (data != null && data.labels === null) ||
    (data != null && typeof data.labels != "object") ||
    (data != null && data.labels != null && data.labels.length < 1) ||
    (data != null && data.datasets === null) ||
    (data != null && typeof data.datasets != "object") ||
    (data != null && data.datasets != null && data.datasets.length < 1)
  );
}

export function checkLabels({ data }: { data: GraphType }) {
  return (
    data === null ||
    (data != null && data.labels === null) ||
    (data != null && typeof data.labels != "object") ||
    (data != null && data.labels != null && data.labels.length < 1)
  );
}

export function checkDataset({ data }: { data: GraphType }) {
  return (
    data === null ||
    (data != null && data.datasets === null) ||
    (data != null && typeof data.datasets != "object") ||
    (data != null && data.datasets != null && data.datasets.length < 1)
  );
}

export function resetGraph() {
  const graph = {
    legendPosition: "bottom",
    labels: [""],
    datasets: [
      {
        label: "Label Value",
        backgroundColor: ["#ffb703"],
        data: [0],
      },
    ],
  };

  return graph;
}
