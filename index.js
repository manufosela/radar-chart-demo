var marksCanvas1 = document.getElementById("marksChart1");

var marksData1 = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History", "Otra cosa mas"],
  datasets: [{
    label: "Student A",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [75, 75, 70, 100, 60, 80, 90]
  }]
};

var radarChart1 = new Chart(marksCanvas1, {
  type: 'radar',
  data: marksData1
});




var marksCanvas2 = document.getElementById("marksChart2");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var marksData2 = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  datasets: [{
    label: "Student A",
    backgroundColor: "transparent",
    borderColor: "rgba(200,0,0,0.6)",
    fill: false,
    radius: 6,
    pointRadius: 6,
    pointBorderWidth: 3,
    pointBackgroundColor: "orange",
    pointBorderColor: "rgba(200,0,0,0.6)",
    pointHoverRadius: 10,
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "Student B",
    backgroundColor: "transparent",
    borderColor: "rgba(0,0,200,0.6)",
    fill: false,
    radius: 6,
    pointRadius: 6,
    pointBorderWidth: 3,
    pointBackgroundColor: "cornflowerblue",
    pointBorderColor: "rgba(0,0,200,0.6)",
    pointHoverRadius: 10,
    data: [54, 65, 60, 70, 70, 75]
  }]
};

var chartOptions2 = {
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 100,
      stepSize: 20
    },
    pointLabels: {
      fontSize: 18
    }
  },
  legend: {
    // position: 'right' //'left'
  }
};

var radarChart2 = new Chart(marksCanvas2, {
  type: 'radar',
  data: marksData2,
  options: chartOptions2
});