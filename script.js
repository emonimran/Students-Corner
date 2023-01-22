var myChart = document.getElementById('myChart');
var xValues = ["Business", "Business", "Business", "Business"];
var yValues = [40, 40, 40, 5];
var barColors = [
  "#BA95EB",
  "#D4B8EB",
  "#91DDF1",
  "#CBFDBF"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: ["Business", "Business", "Business", "Business"],
    datasets: [{
      labels: "This will be hide",
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    zoomOutPercentage: 30,
    aspectRatio: 1,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    }
  },
  
});

var myChart1 = document.getElementById('myChart1');
var xValues = ["Business", "Business", "Business", "Business"];
var yValues = [40, 40, 40, 5];
var barColors = [
  "#BA95EB",
  "#D4B8EB",
  "#91DDF1",
  "#CBFDBF"
];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: ["Business", "Business", "Business", "Business"],
    datasets: [{
      labels: "This will be hide",
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    zoomOutPercentage: 30,
    aspectRatio: 1,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    }
  },
  
});
