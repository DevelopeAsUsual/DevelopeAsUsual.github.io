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

const dots = document.querySelectorAll('.dot');

const historyText = ["The next few years they would struggle to retain their position in the Championship. After a poor 2007-08 season, they sank even lower to League One (which, confusingly, is the third division of English football).", 
"They would climb their way back out of League One at the first attempt in season 2008/09. The following season, Leicester were widely touted as favourites to win promotion back to the Premier League, but the next three seasons would prove disappointing.", 
"In Seaason 2012/13 they finally barely snuck into 6th place, high enough to secure a place in the play-offs for a promotion spot, but lost in absolutely incredible fashion to Watford.", 
"Following this heartbreak, Leicester would come back stronger, finishing in first place in 2013-14, securing automatic promotion after 10 years out of the top flight.", 
"Incredibly, Leicester managed to win 7 of their last 9 matches to secure probably the most miraculous escape in Premier League history, finishing the season safely in 14th place.", 
"After surving a season in the top flight football, they continued this form and this is where our journey starts."
];
const liecesterimageurl = ["assets/season7.jpg", "assets/season8.jpg", "assets/season12.jpg", "assets/season13.jpeg", "assets/season14.jpg", "assets/logo.jpg"];

var hoverTimeout;
const typingElement2 = document.getElementById("typing-text-2");
const section2_5Element = document.getElementById("section2_5");


let continueTyping = false; // Flag to track whether typing should continue or not

// Add event listeners to each dot
dots.forEach((dot) => {
  dot.addEventListener('mouseover', handleDotHover);
  // dot.addEventListener('mouseout', handleDotLeave);
});

// Hover event handler
function handleDotHover(event) {
  clearTimeout(hoverTimeout);

  const childNumber = event.target.dataset.child;
  const imageUrl = `url(${liecesterimageurl[childNumber - 1]})`;

  const cssRule = `.s2_5::after {
    background-image: ${imageUrl};
    opacity : 0.0;
  }
  .s2_5-thead-container { 
    color: RGBA(253,190,17,0); 
  }`;

  const styleElement = document.createElement('style');
  styleElement.textContent = cssRule;
  document.head.appendChild(styleElement);
  fadeIn();
  textfade(historyText[childNumber-1], typingElement2);
}



function textfade(text, element) {
  let opacity = 0;
  element.textContent = text;
  const intervalId = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.2; // Increase opacity gradually
      const cssRule = `.s2_5-thead-container { color: RGBA(253,190,17,${opacity}); }`;
      const styleElement = document.createElement('style');
      styleElement.textContent = cssRule;
      document.head.appendChild(styleElement);
    } else {
      clearInterval(intervalId); // Stop the interval when opacity reaches 1
    }
  }, 100);
}

function fadeIn() {
  let opacity = 0;
  const intervalId = setInterval(() => {
    if (opacity < 0.3) {
      opacity += 0.1; // Increase opacity gradually
      const cssRule = `.s2_5::after { opacity: ${opacity}; }`;
      const styleElement = document.createElement('style');
      styleElement.textContent = cssRule;
      document.head.appendChild(styleElement);
    } else {
      clearInterval(intervalId); // Stop the interval when opacity reaches 1
    }
  }, 100);
}

function fadeout() {
  let opacity = 0.3;
  const intervalId = setInterval(() => {
    if (opacity < 1) {
      opacity -= 0.1; // Increase opacity gradually
      const cssRule = `.s2_5::after { opacity: ${opacity}; }`;
      const styleElement = document.createElement('style');
      styleElement.textContent = cssRule;
      document.head.appendChild(styleElement);
    } else {
      clearInterval(intervalId); // Stop the interval when opacity reaches 1
    }
  }, 100);
}









document.addEventListener("DOMContentLoaded", function() {
  var chartCanvas0 = document.getElementById("chart0").getContext("2d");
  var chartCanvas1 = document.getElementById("chart1").getContext("2d");
  var chartCanvas2 = document.getElementById("chart2").getContext("2d");
  var chartCanvas3 = document.getElementById("chart3").getContext("2d");
  var chartCanvas4 = document.getElementById("chart4").getContext("2d");
  var chartCanvas5 = document.getElementById("chart5").getContext("2d");

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

  var chartData1a = {
    labels: [
      "Norwich", "Everton", "Chelsea", "Liverpool", "Sunderland",
      "Stoke", "Manchester United", "Manchester City", "Bournemouth", "Newcastle",
      "Tottenham", "West Ham", "Swansea", "Crystal Palace", "Southampton",
      "West Bromwich Albion", "Arsenal", "Watford", "Aston Villa", "Leicester"
    ],
    datasets: [{
      label: "Interceptions per game",
      data: [
        12.4, 13.4, 13.6, 14.5, 14.9, 15.2, 15.6, 16.6, 16.8, 16.9,
        17.0, 17.5, 17.9, 18.4, 18.6, 19.0, 19.4, 20.2, 20.2, 21.6
      ],
      backgroundColor: [ "rgba(204, 204, 204, 1)" ],
      borderColor: "rgba(204, 204, 204, 1)",
      borderWidth: 2,
      categoryPercentage: 0.8, // Adjust the value as needed
      barPercentage: 0.9 
    }]
  };
  chartData1a.datasets[0].backgroundColor[chartData1a.labels.length - 1] = "blue";

  var chartData1b = {
    labels: [
       "Norwich", "Swansea", "West Bromwich Albion", "Crystal Palace", "Arsenal",
      "Bournemouth", "Stoke", "West Ham", "Southampton", "Manchester City",
      "Everton", "Aston Villa", "Manchester United", "Sunderland", "Chelsea",
      "Newcastle", "Watford", "Tottenham", "Liverpool", "Leicester"
    ],
    datasets: [{
      label: "Tackles per game",
      data: [
        16.0, 16.8, 16.9, 17.1, 18.6, 18.6,
        18.7, 18.7, 18.8, 19.2, 19.2,
        19.2, 20.0, 20.2, 20.8, 20.8,
        20.9, 21.1, 22.8, 22.9
      ],
      backgroundColor: [ "rgba(204, 204, 204, 1)" ],
      borderColor: "rgba(204, 204, 204, 1)",
      borderWidth: 2
    }]
  };
  chartData1b.datasets[0].backgroundColor[chartData1b.labels.length - 1] = "blue";

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

  var chartData3a = {
    labels: [  "West Bromwich Albion",  "Crystal Palace",  "Watford",  "Norwich",  
    "Bournemouth",  "Swansea",  "Stoke",  "Liverpool",  "Tottenham",  "Manchester United",  
    "Sunderland",  "Southampton",  "Chelsea",  "Newcastle",  "Arsenal",  "Manchester City",  
    "Everton",  "West Ham",  "Leicester",  "Aston Villa"],
    datasets: [{
      label: "Tackles per game",
      data: [0.071052632,  0.082262211,  0.085287846,  0.089686099,  0.093301435,  
        0.096982759,  0.097505669,  0.098086124,  0.100158983,  0.107902736,  
        0.109302326,  0.109339408,  0.10982659,  0.11026616,  0.110831234,  
        0.115384615,  0.117073171,  0.118126273,  0.120071685,  0.130268199
      ],
      backgroundColor: [ "rgba(204, 204, 204, 1)" ],
      borderColor: "rgba(204, 204, 204, 1)",
      borderWidth: 2
    }]
  };
  chartData3a.datasets[0].backgroundColor[chartData3a.labels.length - 1] = "blue";

  var chartData3b = {
    labels: [  "Aston Villa",  "Liverpool",  "Chelsea",  "Manchester United",  
    "Sunderland",  "West Ham",  "Tottenham",  "Arsenal",  "Southampton",  
    "Everton",  "Swansea",  "Newcastle",  "Manchester City",  "Leicester"],

    datasets: [{
      label: "",
      data: [  1,  1,  1,  2,  2,  2,  2,  3,  3,  3,  3,  4,  5,  5],
      backgroundColor: [ "rgba(204, 204, 204, 1)" ],
      borderColor: "rgba(204, 204, 204, 1)",
      borderWidth: 2
    }]
  };
  chartData3b.datasets[0].backgroundColor[chartData3b.labels.length - 1] = "blue";


  const year = [23, 22, 21, 20, 19, 18, 17, 16, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 15];
  const gf = [89, 93, 86, 99, 98, 100, 93, 87, 86, 89, 89, 80, 86, 90, 87, 89, 91, 95, 90, 83, 87, 90, 91, 81];
  const gd = [61, 73, 51, 52, 72, 79, 52, 41, 65, 43, 64, 41, 71, 44, 58, 56, 50, 57, 47, 40, 43, 48, 52, 32];
  var dataPoints4 = [];
  for (let i = 0; i < year.length; i++) {
    const dataPoint = {
      x: gd[i],
      y: gf[i],
      label: `Data Point ${i + 1}`,
    };
    dataPoints4.push(dataPoint);
  }

  var chartData4 = {
    datasets: [{
      label: 'Points',
      data: dataPoints4,
      borderColor: ['RGB(253,190,17)'],
      backgroundColor: ['RGB(253,190,17)'],
      pointRadius: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5,5,5],
      pointHoverRadius: 8,
      pointStyle: 'circle',
    }],
  };
  chartData4.datasets[0].backgroundColor[23] = 'rgb(224, 224, 224)';
  chartData4.datasets[0].pointRadius[23] = 6;


  const year5 = [
    'Manchester United (10/11)',
    'Manchester City (11/12)',
    'Manchester United (12/13)',
    'Chelsea (14/15)',
    'Manchester City (13/14)',
    'Chelsea (16/17)',
    'Liverpool (19/20)',
    'Manchester City (17/18)',
    'Manchester City (18/19)',
    'Leicester City (15/16)'
  ];
  const gf5 = [3.41, 4.11, 3.98, 3.82, 4.34, 3.89, 4.28, 5.48, 5.25, 2.39];
  const gd5 = [1.91, 1.83, 1.92, 1.60, 1.59, 1.51, 1.40, 1.38, 1.25, 1.98];
  var dataPoints5 = [];
  for (let i = 0; i < year5.length; i++) {
    const dataPoint5 = {
      x: gd5[i],
      y: gf5[i],
      label: `Data Point ${i + 1}`,
    };
    dataPoints5.push(dataPoint5);
  }

  var chartData5 = {
    datasets: [{
      label: 'Points',
      data: dataPoints5,
      borderColor: ['RGB(253,190,17)'],
      backgroundColor: ['RGB(253,190,17)'],
      pointRadius: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5,5,5],
      pointHoverRadius: 8,
      pointStyle: 'circle',
    }],
  };
  chartData5.datasets[0].backgroundColor[9] = 'rgb(224, 224, 224)';
  chartData5.datasets[0].pointRadius[9] = 6;


  var initialData = {
    datasets: [
      {
        label: "Arsenal",
        data: [],
        pointHoverBorderColor: "red",
        pointHoverBackgroundColor: "white",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Aston Villa",
        data: [],
        pointHoverBorderColor: "#670E36",
        pointHoverBackgroundColor: "#95BFE5",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Bournemouth",
        data: [],
        pointHoverBorderColor: "#000000",
        pointHoverBackgroundColor: "#B50E12",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Chelsea",
        data: [],
        pointHoverBorderColor: "#034694",
        pointHoverBackgroundColor: "white",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Crystal Palace",
        data: [],
        pointHoverBorderColor: "#1B458F",
        pointHoverBackgroundColor: "#C4122E",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Everton",
        data: [],
        pointHoverBorderColor: "#003399",
        pointHoverBackgroundColor: "white",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Leicester City",
        data: [],
        pointHoverBorderColor: "#003090",
        pointHoverBackgroundColor: "#FDBE11",
        borderColor: "#003090",
        backgroundColor: "#FDBE11",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 12,
      },
      {
        label: "Liverpool",
        data: [],
        pointHoverBorderColor: "#C8102E",
        pointHoverBackgroundColor: "#00B2A9",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Manchester City",
        data: [],
        pointHoverBorderColor: "#6CABDD",
        pointHoverBackgroundColor: "#1C2C5B",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Manchester United",
        data: [],
        pointHoverBorderColor: "#DA291C",
        pointHoverBackgroundColor: "#FBE122",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Newcastle United",
        data: [],
        pointHoverBorderColor: "#241F20",
        pointHoverBackgroundColor: "#FFFFFF",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Norwich City",
        data: [],
        pointHoverBorderColor: "#FFF200",
        pointHoverBackgroundColor: "#00A650",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Southampton",
        data: [],
        pointHoverBorderColor: "#D71920",
        pointHoverBackgroundColor: "#130C0E",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Stoke City",
        data: [],
        pointHoverBorderColor: "#E03A3E",
        pointHoverBackgroundColor: "#1B449C",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Sunderland",
        data: [],
        pointHoverBorderColor: " #ff0000",
        pointHoverBackgroundColor: "#000000",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Swansea City",
        data: [],
        pointHoverBorderColor: "#FFFFFF",
        pointHoverBackgroundColor: "#000000",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Tottenham Hotspur",
        data: [],
        pointHoverBorderColor: "#132257",
        pointHoverBackgroundColor: "#E0E0E0",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "Watford",
        data: [],
        pointHoverBorderColor: "#FBEE23",
        pointHoverBackgroundColor: "#11210C",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "West Bromwich Albion",
        data: [],
        pointHoverBorderColor: "#122F67",
        pointHoverBackgroundColor: "#FFFFFF",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },
      {
        label: "West Ham United",
        data: [],
        pointHoverBorderColorc: "#7A263A",
        pointHoverBackgroundColor: "#1BB1E7",
        borderColor: "silver",
        backgroundColor: "silver",
        pointHoverRadius: 10,
        pointRadius: 6,
        borderWidth: 5,
      },

    ],
  };

  var chart1type = 1;
  var chart3type = 1;
  var chartOptions1 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        offset: true,
        beginAtZero: true,
        ticks: {
          callback: function(value, index, values) {
            if(chart1type < 2){
              if (chartData1a.labels[index].length > 5) {
                return chartData1a.labels[index].substr(0, 3) + '...';
              } else {
                return chartData1a.labels[index];
              }
            }
            else{
              if (chartData1b.labels[index].length > 5) {
                return chartData1b.labels[index].substr(0, 3) + '...';
              } else {
                return chartData1b.labels[index];
              }
            }
          }
        },
        grid: {
          display: false // Remove grid lines for the x-axis
        }
      },
      y: {
        grid: {
          display: false // Remove grid lines for the y-axis
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function(context) {
            return context[0].label; // Display full label in tooltip title
          },
          label: function(context) {
            if(chart1type < 2){
              return 'Interceptions: ' + context.raw; // Customize tooltip label
            }
            else{
              return 'Tackles: ' + context.raw;
            }
            
          }
        }
      }
    }
  };

  var chartOptions3 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        offset: true,
        beginAtZero: true,
        ticks: {
          callback: function(value, index, values) {
            if(chart3type < 2){
              if (chartData3a.labels[index].length > 5) {
                return chartData3a.labels[index].substr(0, 3) + '...';
              } else {
                return chartData3a.labels[index];
              }
            }
            else{
              if (chartData3b.labels[index].length > 5) {
                return chartData3b.labels[index].substr(0, 3) + '...';
              } else {
                return chartData3b.labels[index];
              }
            }
          }
        },
        grid: {
          display: false // Remove grid lines for the x-axis
        }
      },
      y: {
        grid: {
          display: false // Remove grid lines for the y-axis
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function(context) {
            return context[0].label; // Display full label in tooltip title
          },
          label: function(context) {
            if(chart3type < 2){
              return 'Goals per shot: ' + context.raw.toFixed(3); // Customize tooltip label
            }
            else{
              return 'Counter attack goals: ' + context.raw.toFixed(3);
            }
          }
        }
      }
    }
  };

  var chartOptions4 = {
    responsive: true,
    maintainAspectRatio: false,
    legend: false,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        grid: {
          color: 'rgba(224, 224, 224,0.3)'
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        grid: {
          color: 'rgba(224, 224, 224,0.3)'
        }
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.data[context.dataIndex].label;
            const xValue = context.parsed.x;
            const yValue = context.parsed.y;
            return `${label}: (${xValue}, ${yValue})`;
          },
        },
      },
      title: {
        display: true,
        text: 'Scatter Chart',
        font: {
          size: 16,
          weight: 'bold',
          color: 'red'
        }
      },
      legend: {
        display: false
      }
    },
  };




  var chartOptions_dynamic = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        display: false,
        },
      y: {
        reverse: true,
        display: false,
      },
    },
    showLineTooltip: true,
    plugins: {
      legend: {
        display: false, // Remove legend
      },
      tooltip: {
        enabled: true,
      },
    },
    onHover: function (event, chartElements) {

      if (chartElements.length === 0) {
        var datasets = event.chart.data.datasets;

        datasets.forEach(function (dataset, index) {
          if(index === 6){
            dataset.borderColor = '#003090';
            dataset.backgroundColor = "#FDBE11";
          }
          else{
            dataset.borderColor = 'silver';
            dataset.backgroundColor = "silver";
          }
        });

        event.chart.update();
      } 
      else {
        var datasetIndex = chartElements[0].datasetIndex;
        var dataIndex = chartElements[0].index;

        var dataset = event.chart.data.datasets[datasetIndex];

        if (dataset) {

          dataset.borderColor = dataset.pointHoverBorderColor;
          dataset.backgroundColor = dataset.pointHoverBackgroundColor;

          event.chart.update();
        } else {
          console.log('Error: Unable to access dataset');
        }
      }
    },
  };

  var chart0 = new Chart(chartCanvas0, {
    type: "line",
    data: chartData0,
    options: chartOptions1
  });

  var chart1 = new Chart(chartCanvas1, {
    type: "bar",
    data: chartData1a,
    options: chartOptions1
  });

  var chart2 = new Chart(chartCanvas2, {
    type: "line",
    data: initialData,
    options: chartOptions_dynamic
  }); 

  var chart3 = new Chart(chartCanvas3, {
    type: "bar",
    data: chartData3a,
    options: chartOptions3
  });

  var chart4 = new Chart(chartCanvas4, {
    type: 'scatter',
    data: chartData4,
    options: chartOptions4,
  });

  var chart5 = new Chart(chartCanvas5, {
    type: 'scatter',
    data: chartData5,
    options: chartOptions4,
  });

  var dataPoints = [
    [19, 8, 10, 6, 4, 5, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 1, 1, 1,
        1, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
       [7, 9, 12, 14, 15, 17, 18, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20],
       [15, 19, 11, 15, 16, 15, 16, 15, 17, 17, 17, 18, 19, 18, 17, 14,
        14, 14, 16, 16, 16, 15, 16, 15, 15, 15, 15, 15, 14, 12, 13, 13,
        11, 11, 11, 15, 14, 16, 16],
       [10, 16, 8, 13, 17, 14, 14, 16, 12, 15, 15, 16, 15, 14, 14, 16,
        15, 15, 14, 14, 14, 14, 14, 13, 13, 12, 11, 10, 10, 10, 10, 10,
        10, 10, 9, 9, 9, 10, 10],
       [4, 10, 5, 2, 6, 8, 7, 4, 6, 7, 10, 8, 11, 7, 7, 6, 6, 5, 5, 7, 9,
        9, 11, 12, 12, 13, 14, 14, 15, 15, 16, 16, 16, 16, 16, 16, 15,
        15, 15],
       [12, 6, 7, 9, 7, 6, 6, 7, 9, 12, 11, 9, 7, 9, 11, 10, 10, 11, 11,
        11, 11, 12, 12, 11, 9, 11, 12, 11, 12, 13, 12, 12, 14, 15, 12,
        12, 12, 11, 11],
       [2, 2, 4, 3, 2, 3, 8, 5, 5, 5, 3, 3, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
       [5, 3, 2, 7, 9, 11, 9, 10, 10, 9, 7, 10, 9, 6, 6, 8, 9, 8, 6, 8,
        8, 8, 7, 7, 8, 8, 7, 7, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8],
       [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 4, 3, 3, 3, 3, 3, 3, 3,
        2, 2, 4, 4, 4, 4, 4, 4, 6, 5, 4, 4, 4, 4, 4, 4, 4],
       [6, 4, 3, 5, 3, 2, 1, 3, 3, 4, 4, 4, 2, 3, 3, 4, 4, 6, 7, 5, 6, 5,
        5, 5, 5, 5, 5, 5, 7, 6, 5, 4, 5, 5, 6, 6, 5, 5, 5],
       [13, 15, 17, 19, 20, 19, 19, 20, 18, 19, 18, 17, 17, 19, 18, 15,
        17, 18, 18, 18, 19, 18, 18, 18, 17, 18, 17, 17, 18, 19, 19, 19,
        19, 19, 19, 19, 19, 18, 18],
       [18, 7, 9, 11, 10, 12, 11, 13, 16, 16, 16, 15, 16, 16, 16, 18, 16,
        17, 15, 15, 15, 16, 17, 17, 18, 17, 18, 19, 19, 18, 18, 17, 17,
        18, 18, 18, 18, 19, 19],
       [11, 17, 18, 10, 13, 16, 13, 9, 8, 10, 8, 7, 8, 10, 12, 12, 12,
        12, 12, 13, 12, 10, 8, 8, 7, 6, 8, 9, 9, 8, 8, 8, 8, 8, 8, 7, 7,
        6, 6],
       [14, 13, 15, 18, 18, 18, 17, 14, 11, 14, 13, 11, 10, 11, 9, 11,
        11, 9, 9, 9, 7, 7, 9, 10, 11, 9, 9, 8, 8, 9, 9, 9, 9, 9, 10, 10,
        10, 9, 9],
       [17, 20, 19, 20, 19, 20, 20, 19, 20, 18, 19, 19, 18, 17, 19, 19,
        19, 19, 19, 19, 18, 19, 19, 19, 19, 19, 19, 18, 17, 17, 17, 18,
        18, 17, 17, 17, 17, 17, 17],
       [9, 5, 6, 4, 8, 7, 12, 12, 14, 11, 14, 14, 14, 15, 15, 17, 18, 16,
        17, 17, 17, 17, 15, 16, 16, 16, 16, 16, 16, 16, 15, 15, 12, 13,
        15, 13, 11, 12, 12],
       [16, 14, 16, 17, 11, 9, 5, 8, 7, 6, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4,
        4, 4, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3],
       [8, 12, 13, 16, 12, 10, 10, 11, 15, 13, 9, 12, 13, 12, 10, 7, 7,
        7, 8, 10, 10, 11, 10, 9, 10, 10, 10, 12, 13, 14, 14, 14, 15, 12,
        13, 11, 13, 13, 13],
       [20, 18, 20, 12, 14, 13, 15, 17, 13, 8, 12, 13, 12, 13, 13, 13,
        13, 13, 13, 12, 13, 13, 13, 14, 14, 14, 13, 13, 11, 11, 11, 11,
        13, 14, 14, 14, 16, 14, 14],
       [3, 11, 14, 8, 5, 4, 3, 6, 4, 3, 6, 6, 6, 8, 8, 9, 8, 10, 10, 6,
        5, 6, 6, 6, 6, 7, 6, 6, 5, 5, 4, 6, 6, 6, 5, 5, 6, 7, 7],
  ];

  var sliced = 7;
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

  function updateChart() {
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
      clearInterval(intervalId);
    }
  }

  var intervalId = setInterval(updateChart, 1500);

  function startInterval() {
    intervalId = setInterval(updateChart, 1500);
  }

  chart2.canvas.addEventListener('mouseenter', function() {
    clearInterval(intervalId);
  });

  chart2.canvas.addEventListener('mouseleave', function() {
    if (index >= dataPoints[0].length) {
      clearInterval(intervalId);
    }
    else{
      startInterval();
    }
  });


  // Update the charts if the window is resized
  window.addEventListener("resize", function() {
    chart0.update();
    chart1.update();
    chart2.update();
    chart3.update();
    chart4.update();
    chart5.update();
  });

  const circle1 = document.getElementById('circle1');
  const circle2 = document.getElementById('circle2');
  const circle3 = document.getElementById('circle3');
  const circle4 = document.getElementById('circle4');


  circle1.classList.add('selected');
  circle2.classList.remove('selected');

  circle3.classList.add('selected');
  circle4.classList.remove('selected');

  circle1.addEventListener('click', () => {
    circle1.classList.add('selected');
    circle2.classList.remove('selected');
    chart1.data = chartData1a;
    chart1type = 1;
    chart1.update();

  });

  circle2.addEventListener('click', () => {
    circle2.classList.add('selected');
    circle1.classList.remove('selected');
    chart1.data = chartData1b;
    chart1type = 2;
    chart1.update();
  });

  circle3.addEventListener('click', () => {
    circle3.classList.add('selected');
    circle4.classList.remove('selected');
    chart3.data = chartData3a;
    chart3type = 1;
    chart3.update();

  });

  circle4.addEventListener('click', () => {
    circle4.classList.add('selected');
    circle3.classList.remove('selected');
    chart3.data = chartData3b;
    chart3type = 2;
    chart3.update();
    console.log("asda");
  });




});



const semi = document.querySelectorAll('.point');

const historyText4 = ["The next few years they would struggle to retain their position in the Championship. After a poor 2007-08 season, they sank even lower to League One (which, confusingly, is the third division of English football).", 
"They would climb their way back out of League One at the first attempt in season 2008/09. The following season, Leicester were widely touted as favourites to win promotion back to the Premier League, but the next three seasons would prove disappointing.", 
"In Seaason 2012/13 they finally barely snuck into 6th place, high enough to secure a place in the play-offs for a promotion spot, but lost in absolutely incredible fashion to Watford.", 
"Following this heartbreak, Leicester would come back stronger, finishing in first place in 2013-14, securing automatic promotion after 10 years out of the top flight.", 
"Incredibly, Leicester managed to win 7 of their last 9 matches to secure probably the most miraculous escape in Premier League history, finishing the season safely in 14th place.", 
"After surving a season in the top flight football, they continued this form and this is where our journey starts."
];

var hoverTimeout4;
const typingElement4 = document.getElementById("typing-text-4");
const section4Element = document.getElementById("section4");


let continueTyping4 = false; // Flag to track whether typing should continue or not

// Add event listeners to each dot
semi.forEach((point) => {
  point.addEventListener('mouseover', handleDotHover4);
  // dot.addEventListener('mouseout', handleDotLeave);
});

// Hover event handler
function handleDotHover4(event) {
  clearTimeout(hoverTimeout4);

  const childNumber4 = event.target.dataset.child;

  const cssRule = `
  .s4-thead-container { 
    color: RGBA(0, 33, 115,0); 
  }`;

  const styleElement = document.createElement('style');
  styleElement.textContent = cssRule;
  document.head.appendChild(styleElement);
  console.log(childNumber4);
  textfade4(historyText4[childNumber4-1], typingElement4);
}



function textfade4(text, element) {
  let opacity = 0;
  element.textContent = text;
  const intervalId = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.2; // Increase opacity gradually
      const cssRule = `.s4-thead-container { color: RGBA(0, 33, 115,${opacity}); }`;
      const styleElement = document.createElement('style');
      styleElement.textContent = cssRule;
      document.head.appendChild(styleElement);
    } else {
      clearInterval(intervalId); // Stop the interval when opacity reaches 1
    }
  }, 100);
}




