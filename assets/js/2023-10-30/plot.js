//let combinations = calculator.combinations;

function createPlot() {
    let trueAlarm = parseInt(document.getElementById('trueAlarmPlot').value);
    let dismissedAlarm = parseInt(document.getElementById('dismissedAlarmPlot').value);
    let xValues = [];
    let yValues1 = [];
    let yValues2 = [];
  
    for (let falseAlarm = 0; falseAlarm <= 50; falseAlarm++) {
      let combination = combinations.find(c => 
        c.falseAlarm === falseAlarm && 
        c.trueAlarm === trueAlarm && 
        c.dismissedAlarm === dismissedAlarm
      );
  
      if (combination) {
        let prob = parseFloat(combination.prob);
        xValues.push(falseAlarm);
        yValues1.push(prob);
        yValues2.push(1 - prob);
      }
    }
  
    let trace1 = {
      x: xValues,
      y: yValues1,
      mode: 'lines+markers',
      name: 'Fire(1)'
    };
  
    let trace2 = {
      x: xValues,
      y: yValues2,
      mode: 'lines+markers',
      name: 'Fire(0)'
    };
  
    let data = [trace1, trace2];
  
    let layout = {
      title: 'Probability of Fire(1) and Fire(0)',
      xaxis: {
        title: 'False Alarm Count'
      },
      yaxis: {
        title: 'Probability'
      }
    };
  
    Plotly.newPlot('plot', data, layout);
  }
  
  document.getElementById('plotButton').addEventListener('click', function() {
    createPlot();
  });



