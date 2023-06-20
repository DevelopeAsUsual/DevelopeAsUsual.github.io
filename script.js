document.addEventListener("DOMContentLoaded", function() {
  var chartCanvas0 = document.getElementById("chart0").getContext("2d");
  var chartCanvas1 = document.getElementById("chart1").getContext("2d");
  var chartCanvas2 = document.getElementById("chart2").getContext("2d");
  var chartCanvas3 = document.getElementById("chart3").getContext("2d");

  var chartData0 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [{
      label: "Data 0",
      data: [5, 12, 8, 15, 10],
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      borderColor: "rgba(255, 0, 0, 1)",
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: "rgba(255, 0, 0, 1)",
      pointBorderColor: "rgba(255, 0, 0, 1)",
      pointHoverRadius: 6,
      pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
      pointHoverBorderColor: "rgba(255, 0, 0, 1)"
    }]
  };

  var chartData1 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Line 1",
        data: [10, 20, 15, 25, 30],
        borderColor: "yellow",
        backgroundColor: "transparent",
      },
      {
        label: "Line 2",
        data: [5, 15, 10, 20, 25],
        borderColor: "red",
        backgroundColor: "yellow",
      },
      {
        label: "Line 3",
        data: [15, 10, 20, 25, 30],
        borderColor: "green",
        backgroundColor: "transparent",
      },
    ],
  };

  var chartData2 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [{
      label: "Data 2",
      data: [5, 12, 8, 15, 10],
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      borderColor: "rgba(255, 0, 0, 1)",
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: "rgba(255, 0, 0, 1)",
      pointBorderColor: "rgba(255, 0, 0, 1)",
      pointHoverRadius: 6,
      pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
      pointHoverBorderColor: "rgba(255, 0, 0, 1)"
    }]
  };

  var chartData3 = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [{
      label: "Data 3",
      data: [7, 14, 10, 18, 13],
      backgroundColor: "rgba(0, 255, 0, 0.5)",
      borderColor: "rgba(0, 255, 0, 1)",
      borderWidth: 2
    }]
  };

  var initialData = {
    datasets: [
      {
        label: "Line 1",
        data: [],
        borderColor: "red",
        backgroundColor: "transparent",
      },
      {
        label: "Line 2",
        data: [],
        borderColor: "green",
        backgroundColor: "transparent",
      },
      {
        label: "Line 3",
        data: [],
        borderColor: "blue",
        backgroundColor: "transparent",
      },
    ],
  };

  var chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  var chartOptions_dynamic = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        },
      y: {
        beginAtZero: true,
      },
    },
  };

  var chart0 = new Chart(chartCanvas0, {
    type: "line",
    data: chartData0,
    options: chartOptions
  });

  var chart1 = new Chart(chartCanvas1, {
    type: "line",
    data: chartData1,
    options: chartOptions
  });

  var chart2 = new Chart(chartCanvas2, {
    type: "line",
    data: initialData,
    options: chartOptions_dynamic
  }); 

  var chart3 = new Chart(chartCanvas3, {
    type: "bar",
    data: chartData3,
    options: chartOptions
  });

  var dataPoints = [
    [10, 20, 35, 46, 24, 33, 25, 16, 37],
    [5, 15, 25, 10, 20, 30, 15, 25, 35],
    [20, 10, 15, 30, 25, 5, 18, 23, 12],
  ];

  var subset = dataPoints.map(function(dataset) {
    return dataset.slice(0, 5);
  });

  var index = 5;
  var labels = Array.from({ length: 5 }, (_, i) => "Matchday " + (i + 1));

  chart2.data.labels = labels.slice(0, 5);
  chart2.data.datasets.forEach(function(dataset, i) {
    dataset.data = subset[i];
  });

  chart2.update();

  setInterval(function() {
    subset = subset.map(function(dataset, i) {
      dataset.shift();
      dataset.push(dataPoints[i][index]);
      return dataset;
    });

    labels.shift();
    labels.push("Matchday " + (index + 1));

    chart2.data.labels = labels.slice(0, 5);

    chart2.data.datasets.forEach(function(dataset, i) {
      dataset.data = subset[i];
    });

    chart2.update();

    index++;

    if (index >= dataPoints[0].length) {
      index = 0;
    }
  }, 1500);

  // Update the charts if the window is resized
  window.addEventListener("resize", function() {
    chart0.update();
    chart1.update();
    chart2.update();
    chart3.update();
  });




});
