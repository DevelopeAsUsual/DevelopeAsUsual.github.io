const textToType = "LIECESTER CITY - 15/16 CHAMPIONS";
const typingDelay = 30; // Delay in milliseconds between each character

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(text, element) {
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await delay(Math.random() * 100); // Random delay between 0 and 100 milliseconds
  }
}

const typingElement = document.getElementById("typing-text");
typeText(textToType, typingElement);

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
        label: "Arsenal",
        data: [19, 8, 10, 6, 4, 5, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 1, 1, 1,
        1, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        borderColor: "yellow",
        backgroundColor: "transparent",
      },
      {
        label: "Aston Villa",
        data: [7, 9, 12, 14, 15, 17, 18, 18, 19, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20],
        borderColor: "red",
        backgroundColor: "yellow",
      },
      {
        label: "Bournemouth",
        data: [15, 19, 11, 15, 16, 15, 16, 15, 17, 17, 17, 18,
        19, 18, 17, 14, 14, 14, 16, 16, 16, 15, 16, 15, 15, 15, 15, 15,
        14, 12, 13, 13, 11, 11, 11, 15, 14, 16],
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
        label: "Arsenal",
        data: [],
        borderColor: "red",
        backgroundColor: "white",
      },
      {
        label: "Aston Villa",
        data: [],
        borderColor: "#670E36",
        backgroundColor: "#95BFE5",
      },
      {
        label: "Bournemouth",
        data: [],
        borderColor: "#000000",
        backgroundColor: "#B50E12",
      },
      {
        label: "Chelsea",
        data: [],
        borderColor: "#034694",
        backgroundColor: "white",
      },
      {
        label: "Crystal Palace",
        data: [],
        borderColor: "#1B458F",
        backgroundColor: "#C4122E",
      },
      {
        label: "Everton",
        data: [],
        borderColor: "#003399",
        backgroundColor: "white",
      },
      {
        label: "Leicester City",
        data: [],
        borderColor: "#003090",
        backgroundColor: "#FDBE11",
      },
      {
        label: "Liverpool",
        data: [],
        borderColor: "#C8102E",
        backgroundColor: "#00B2A9",
      },
      {
        label: "Manchester City",
        data: [],
        borderColor: "#6CABDD",
        backgroundColor: "#1C2C5B",
      },
      {
        label: "Manchester United",
        data: [],
        borderColor: "#DA291C",
        backgroundColor: "#FBE122",
      },
      {
        label: "Newcastle United",
        data: [],
        borderColor: "#241F20",
        backgroundColor: "#FFFFFF",
      },
      {
        label: "Norwich City",
        data: [],
        borderColor: "#FFF200",
        backgroundColor: "#00A650",
      },
      {
        label: "Southampton",
        data: [],
        borderColor: "#D71920",
        backgroundColor: "#130C0E",
      },
      {
        label: "Stoke City",
        data: [],
        borderColor: "#E03A3E",
        backgroundColor: "#1B449C",
      },
      {
        label: "Sunderland",
        data: [],
        borderColor: "blue",
        backgroundColor: "transparent",
      },
      {
        label: "Swansea City",
        data: [],
        borderColor: "#FFFFFF",
        backgroundColor: "#000000",
      },
      {
        label: "Tottenham Hotspur",
        data: [],
        borderColor: "#132257",
        backgroundColor: "#E0E0E0",
      },
      {
        label: "Watford",
        data: [],
        borderColor: "#FBEE23",
        backgroundColor: "#11210C",
      },
      {
        label: "West Bromwich Albion",
        data: [],
        borderColor: "#122F67",
        backgroundColor: "#FFFFFF",
      },
      {
        label: "West Ham United",
        data: [],
        borderColor: "#7A263A",
        backgroundColor: "#1BB1E7",
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
        reverse: true,
        min: 0.5,
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
    [19, 8, 10, 6, 4, 5, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 1, 1, 1,
        1, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
       [7, 9, 12, 14, 15, 17, 18, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20],
       [15, 19, 11, 15, 16, 15, 16, 15, 17, 17, 17, 18, 19, 18, 17, 14,
        14, 14, 16, 16, 16, 15, 16, 15, 15, 15, 15, 15, 14, 12, 13, 13,
        11, 11, 11, 15, 14, 16],
       [10, 16, 8, 13, 17, 14, 14, 16, 12, 15, 15, 16, 15, 14, 14, 16,
        15, 15, 14, 14, 14, 14, 14, 13, 13, 12, 11, 10, 10, 10, 10, 10,
        10, 10, 9, 9, 9, 10],
       [4, 10, 5, 2, 6, 8, 7, 4, 6, 7, 10, 8, 11, 7, 7, 6, 6, 5, 5, 7, 9,
        9, 11, 12, 12, 13, 14, 14, 15, 15, 16, 16, 16, 16, 16, 16, 15,
        15],
       [12, 6, 7, 9, 7, 6, 6, 7, 9, 12, 11, 9, 7, 9, 11, 10, 10, 11, 11,
        11, 11, 12, 12, 11, 9, 11, 12, 11, 12, 13, 12, 12, 14, 15, 12,
        12, 12, 11],
       [2, 2, 4, 3, 2, 3, 8, 5, 5, 5, 3, 3, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
       [5, 3, 2, 7, 9, 11, 9, 10, 10, 9, 7, 10, 9, 6, 6, 8, 9, 8, 6, 8,
        8, 8, 7, 7, 8, 8, 7, 7, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8],
       [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 4, 3, 3, 3, 3, 3, 3, 3,
        2, 2, 4, 4, 4, 4, 4, 4, 6, 5, 4, 4, 4, 4, 4, 4],
       [6, 4, 3, 5, 3, 2, 1, 3, 3, 4, 4, 4, 2, 3, 3, 4, 4, 6, 7, 5, 6, 5,
        5, 5, 5, 5, 5, 5, 7, 6, 5, 4, 5, 5, 6, 6, 5, 5],
       [13, 15, 17, 19, 20, 19, 19, 20, 18, 19, 18, 17, 17, 19, 18, 15,
        17, 18, 18, 18, 19, 18, 18, 18, 17, 18, 17, 17, 18, 19, 19, 19,
        19, 19, 19, 19, 19, 18],
       [18, 7, 9, 11, 10, 12, 11, 13, 16, 16, 16, 15, 16, 16, 16, 18, 16,
        17, 15, 15, 15, 16, 17, 17, 18, 17, 18, 19, 19, 18, 18, 17, 17,
        18, 18, 18, 18, 19],
       [11, 17, 18, 10, 13, 16, 13, 9, 8, 10, 8, 7, 8, 10, 12, 12, 12,
        12, 12, 13, 12, 10, 8, 8, 7, 6, 8, 9, 9, 8, 8, 8, 8, 8, 8, 7, 7,
        6],
       [14, 13, 15, 18, 18, 18, 17, 14, 11, 14, 13, 11, 10, 11, 9, 11,
        11, 9, 9, 9, 7, 7, 9, 10, 11, 9, 9, 8, 8, 9, 9, 9, 9, 9, 10, 10,
        10, 9],
       [17, 20, 19, 20, 19, 20, 20, 19, 20, 18, 19, 19, 18, 17, 19, 19,
        19, 19, 19, 19, 18, 19, 19, 19, 19, 19, 19, 18, 17, 17, 17, 18,
        18, 17, 17, 17, 17, 17],
       [9, 5, 6, 4, 8, 7, 12, 12, 14, 11, 14, 14, 14, 15, 15, 17, 18, 16,
        17, 17, 17, 17, 15, 16, 16, 16, 16, 16, 16, 16, 15, 15, 12, 13,
        15, 13, 11, 12],
       [16, 14, 16, 17, 11, 9, 5, 8, 7, 6, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4,
        4, 4, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
       [8, 12, 13, 16, 12, 10, 10, 11, 15, 13, 9, 12, 13, 12, 10, 7, 7,
        7, 8, 10, 10, 11, 10, 9, 10, 10, 10, 12, 13, 14, 14, 14, 15, 12,
        13, 11, 13, 13],
       [20, 18, 20, 12, 14, 13, 15, 17, 13, 8, 12, 13, 12, 13, 13, 13,
        13, 13, 13, 12, 13, 13, 13, 14, 14, 14, 13, 13, 11, 11, 11, 11,
        13, 14, 14, 14, 16, 14],
       [3, 11, 14, 8, 5, 4, 3, 6, 4, 3, 6, 6, 6, 8, 8, 9, 8, 10, 10, 6,
        5, 6, 6, 6, 6, 7, 6, 6, 5, 5, 4, 6, 6, 6, 5, 5, 6, 7],
  ];

  var sliced = 9
  var subset = dataPoints.map(function(dataset) {
    return dataset.slice(0, sliced);
  });

  var index = sliced;
  var labels = Array.from({ length: sliced }, (_, i) => "Matchday " + (i + 1));

  chart2.data.labels = labels.slice(0, sliced);
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

    chart2.data.labels = labels.slice(0, sliced);

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
