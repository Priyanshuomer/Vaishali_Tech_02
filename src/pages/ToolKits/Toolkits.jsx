import React from 'react';
import SmarterTools from './SmarterTools';
import ReadTheMarket from './ReadTheMarket';
import AdvanceTechnical from './AdvanceTechnical';
import PredictCard from './PredictCard';
import FuelTradingPotential from './FuelTradingPotential';
import Fuel from './Fuel';

const Toolkits = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <SmarterTools />
      <ReadTheMarket />
      <AdvanceTechnical />
      <PredictCard />
      <FuelTradingPotential />
      <Fuel />
    </div>
  );
};

export default Toolkits;
