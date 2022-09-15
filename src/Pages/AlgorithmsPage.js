import React, { useState } from 'react';
import Button from '../components/Button';
import '../styles/algorithmsPageStyle.css';
import breakingRecords from '../components/algorithms/breakingTheRecord/breakingTheRecord';

export default function AlgorithmsPage() {
  const [index, setIndex] = useState(0);

  const handleRunFunction = () => {
    console.log('starting breaking records function');
    breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1], index);
  };

  const updateIndex = () => {
    setIndex(index + 1);
  };

  return (
    <div className="algorithms-page-container">
      <div className="function-section"></div>
      <div className="controls-section">
        <Button label="Start Function" onClick={handleRunFunction} />
        <Button label="Increase Index" onClick={updateIndex} />
      </div>
    </div>
  );
}
