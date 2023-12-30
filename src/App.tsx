import Table from "./component/Table"
import { calculateStatistics, getGamaDataSet } from "./helper/utils"
import dataSet from "./data/Wine-Data.json"

function App() {
  const flavanoidsData = calculateStatistics(dataSet, "Flavanoids")
  const gamaDataSet = getGamaDataSet(dataSet)
  const gamadata = calculateStatistics(gamaDataSet, "Gamma")
 
  return (
    <div className="container">
      <h2>Statistical masure of wine data</h2>
  
      <h3>Flavanoids</h3>
      <Table data={flavanoidsData} property="Flavanoids"/>

      <h3>Gamma</h3>
      <Table data={gamadata} property="Gamma"/>
    </div>
  );
}

export default App;
