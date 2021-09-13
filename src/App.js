import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import FillOptions from './FillOptions';

function App() {
  const [brutto,setBrutto] = useState(0);
  const [vero,setVero] = useState(0);
  const [veroSumma,setVeroSumma] = useState(0);
  const [insurance,setInsurance] = useState(1);
  const [insuranceSum,setInsuranceSum] = useState(0);
  const [pension,setPension] = useState(1);
  const [pensionSum,setPensionSum] = useState(0);
  const [netto,setNetto] = useState(0);

  function calcSalary(e) {
    e.preventDefault();
    const veroEurot = brutto / 100 * vero;
    const teEurot = brutto / 100 * pension;
    const tvEurot = brutto / 100 * insurance;
    setVeroSumma(veroEurot);
    setPensionSum(teEurot);
    setInsuranceSum(tvEurot);
    setNetto(brutto - veroEurot - teEurot - tvEurot);
  }


  return (
    <div id ="container">
      <h3>Salary calculator</h3>
      <form onSubmit={calcSalary}>
    <div>
      <div>
        <label>Salary</label>
      </div>
      <input type="number"
      value={brutto}
      onChange={e => setBrutto(e.target.value)} />
      <div>
        <label>Tax (%)</label>
        <output> {veroSumma} € </output>
      </div>
      <input type="number"
      value={vero}
      onChange={e => setVero(e.target.value)} />
      <div>Insurance (%)</div>
      <output> {insuranceSum} € </output>
    <select
    value={insurance}
    onChange={e => setInsurance(e.target.value)}>
      <FillOptions />
    </select>
    <div>Pension (%)</div>
    <output> {pensionSum} € </output>
    <select
    value={pension}
    onChange={e => setPension(e.target.value)}>
      <FillOptions />
    </select>
    <div>
        <label>Your salary</label>
        <output id="netto">{netto} €</output>
      </div>
      <button>Calculate</button>
      
    </div>
    </form>
    </div>
  );
}

export default App;
