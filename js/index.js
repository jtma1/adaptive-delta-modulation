// Do maths
const timeTotal = 2 * Math.PI;
//Am * cos(2*pi*f + phi);
let msgFrequency = 1000;
let deltaFrequency = 1000;
let deltaPeriod = 1 / deltaFrequency;
let deltaValue = 5;

let x = [];
let i = 0;
while (i < timeTotal) {
  x.push(i);
  i += deltaPeriod;
}

let y = [];
let generateCosine = () => {
  x.forEach((element) => {
    y.push(Math.cos(element));
  });
};
generateCosine();

let z = [];
let generateDeltaModulation = () => {
  // Delta Modulation - step thingy

  //increase by period
  //if the value is too low, go up by step
  //else, go down by step

  let step = 1;
  //increase by period
  //if the value is too low, go up by step
  //if the value is too low again, go up by step+delta
  //else, go down by step
  //if the value was too high last time, go down by step+delta
};

const configData = {
  labels: x,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: y,
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: z,
    },
  ],
};

// Chart setup
let config = {
  type: "line",
  data: configData,
  options: {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Adaptive Delta Modulation",
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
};

// Output chart to page
let mainChart = new Chart(document.getElementById("mainChart"), config);

// Input Sliders
let msgFrequencySlider = document.getElementById("msgFrequencyRange");
let deltaFrequencySlider = document.getElementById("deltaFrequencyRange");
let deltaValueSlider = document.getElementById("deltaValueRange");

let msgFrequencyValueText = document.getElementById("msgFrequencyTextArea");
let deltaFrequencyValueText = document.getElementById("deltaFrequencyTextArea");
let deltaValueText = document.getElementById("deltaValueTextArea");

// Display the default slider value
msgFrequencyValueText.innerHTML = msgFrequencySlider.value;
deltaFrequencyValueText.innerHTML = deltaFrequencySlider.value;
deltaValueText.innerHTML = deltaValueSlider.value;

// Update the current slider value (each time you drag the slider handle)
msgFrequencySlider.oninput = function () {
  msgFrequencyValueText.innerHTML = this.value;
  msgFrequency = this.value;
};

deltaFrequencySlider.oninput = function () {
  deltaFrequencyValueText.innerHTML = this.value;
  deltaFrequency = this.value;
};

deltaValueSlider.oninput = function () {
  deltaValueText.innerHTML = this.value;
  deltaValue = this.value;
};

function updateAll() {
  generateCosine(); // re-calculate sine wave
  generateDeltaModulation(); // re-calculate delta modulation
  mainChart.update(); // update chart
}
