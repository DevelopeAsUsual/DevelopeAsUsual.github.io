const ColorA = '#ec8a6f';
const ColorB = '#12538d';
const ColorC = '#60D2B6'; //green
const ColorD = '#aaaaaa';
const ColorE = '#FFCE5C'; //yellow
const ColorH = '#1F363D'; //Black
const ColorW = '#ffffff';
const ColorG = '#eeeeee';
const ColorF = '#666666';
const ColorI = '#81d1a3';
const ColorJ = '#c2cf7e';
const ColorK = '#fabb61';
const ColorL = '#f29f69';










// Data for the horizontal stacked bar graph
const data5 = {
    labels: ['Unit %','Dollar %'],
    datasets: [
        {
            label: 'Paid-off Loans',
            data: [10,11], // Data values for Series 1
            backgroundColor: ColorC, // Color for Series 1
        },
        {
            label: 'Open Partial Paid Loans',
            data: [80,78], // Data values for Series 2
            backgroundColor: ColorE, // Color for Series 2
        },
        {
            label: 'Open Unpaid Loans',
            data: [5,6], // Data values for Series 3
            backgroundColor: ColorD, // Color for Series 3
        },
        {
            label: 'Charge-off Loans',
            data: [5,5], // Data values for Series 3
            backgroundColor: ColorA, // Color for Series 3
        },
    ],
};

// Configuration options for the horizontal stacked bar graph
const options5 = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // Display bars horizontally
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

// Get the canvas element to render the chart
const ctx5 = document.getElementById('item5').getContext('2d');

// Create the horizontal stacked bar chart
const item5 = new Chart(ctx5, {
    type: 'bar',
    data: data5,
    options: options5,
});













const data8 = {
    datasets: [
        {
            data: [15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13], // Data values for Series 2 // Colors for Series 2
            backgroundColor: [ColorC, ColorC, ColorC, ColorC, ColorC, ColorC,
             ColorI, ColorI, ColorI, ColorI, ColorI, ColorI, 
             ColorJ, ColorJ, ColorJ, ColorJ, ColorJ, ColorJ, 
             ColorE, ColorE, ColorE, ColorE, ColorE, ColorE, 
             ColorK, ColorK, ColorK, ColorK, ColorK, ColorK, 
             ColorL, ColorL, ColorL, ColorL, ColorL, ColorL, 
             ColorA, ColorA, ColorA, ColorA, ColorA, ColorA],
            label: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6'],
        },
        {
            data: [30, 45, 25, 30, 45, 25, 22], // Data values for Series 1
            backgroundColor: [ColorC, ColorI, ColorJ, ColorE, ColorK, ColorL, ColorA], // Colors for Series 1
            label: ['A', 'B', 'C','D', 'E', 'F','G'],
        },
        
    ],
};

// Configuration options for the pie chart
const options8 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: false,
        datalabels: {
            formatter: (value, ctx) => {
                // Customize the label format based on the dataset index and data index
                if (ctx.datasetIndex === 0) {
                    // For Series 1 (Grade)
                    return data8.datasets[0].label[ctx.dataIndex];
                } else if (ctx.datasetIndex === 1) {
                    // For Series 2 (Sub Grade)
                    return data8.datasets[1].label[ctx.dataIndex];
                } else {
                    return ''; // Return an empty label for other datasets
                }
            },
            color: 'white',
            borderRadius: 5,
            padding: {
                top: 5,
                right: 10,
                bottom: 5,
                left: 10,
            },
        },
    },
    tooltips: {
        callbacks: {
            label: function (tooltipItem, data) {
                const datasetIndex = tooltipItem.datasetIndex;
                const dataIndex = tooltipItem.index;
                const value = data8.datasets[datasetIndex].data[dataIndex];

                return value.toString(); // Display the value without the label
            },
        },
    },
};



// Get the canvas element and render the chart
const ctx8 = document.getElementById('item8').getContext('2d');
const item8 = new Chart(ctx8, {
    type: 'doughnut',
    data: data8,
    options: options8,
    plugins: [ChartDataLabels], // Add this line to enable the datalabels plugin
});







const data9 = {
    datasets: [
        {
            data: [15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13, 15, 15, 30, 40, 12, 13], // Data values for Series 2 // Colors for Series 2
            backgroundColor: [ColorC, ColorC, ColorC, ColorC, ColorC, ColorC,
             ColorI, ColorI, ColorI, ColorI, ColorI, ColorI, 
             ColorJ, ColorJ, ColorJ, ColorJ, ColorJ, ColorJ, 
             ColorE, ColorE, ColorE, ColorE, ColorE, ColorE, 
             ColorK, ColorK, ColorK, ColorK, ColorK, ColorK, 
             ColorL, ColorL, ColorL, ColorL, ColorL, ColorL, 
             ColorA, ColorA, ColorA, ColorA, ColorA, ColorA],
            label: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6'],
        },
        {
            data: [30, 45, 25, 30, 45, 25, 22], // Data values for Series 1
            backgroundColor: [ColorC, ColorI, ColorJ, ColorE, ColorK, ColorL, ColorA], // Colors for Series 1
            label: ['A', 'B', 'C','D', 'E', 'F','G'],
        },
    ],
};

// Configuration options for the pie chart
const options9 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: false,
        datalabels: {
            formatter: (value, ctx) => {
                // Customize the label format based on the dataset index and data index
                if (ctx.datasetIndex === 0) {
                    // For Series 1 (Grade)
                    return data9.datasets[0].label[ctx.dataIndex];
                } else if (ctx.datasetIndex === 1) {
                    // For Series 2 (Sub Grade)
                    return data9.datasets[1].label[ctx.dataIndex];
                } else {
                    return ''; // Return an empty label for other datasets
                }
            },
            color: 'white',
            borderRadius: 5,
            padding: {
                top: 5,
                right: 10,
                bottom: 5,
                left: 10,
            },
        },
    },
    tooltips: {
        callbacks: {
            label: function (tooltipItem, data) {
                const datasetIndex = tooltipItem.datasetIndex;
                const dataIndex = tooltipItem.index;
                const value = data9.datasets[datasetIndex].data[dataIndex];

                return value.toString(); // Display the value without the label
            },
        },
    },
};



// Get the canvas element and render the chart
const ctx9 = document.getElementById('item9').getContext('2d');
const item9 = new Chart(ctx9, {
    type: 'doughnut',
    data: data9,
    options: options9,
    plugins: [ChartDataLabels], // Add this line to enable the datalabels plugin
});


















































// Data for the horizontal stacked bar graph
const data11 = {
    labels: ['36 Months', '60 Months'],
    datasets: [
        {
            label: '# Unit Lonas',
            data: [10, 22], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: '$ Volume Loans',
            data: [15, 33], // Data values for Series 2
            backgroundColor: ColorC, // Color for Series 2
        },
    ],
};

// Configuration options for the horizontal stacked bar graph
const options11 = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x', // Display bars horizontally
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        x: {
            stacked: false,
        },
        y: {
            stacked: false,
        },
    },
};

// Get the canvas element to render the chart
const ctx11 = document.getElementById('item11').getContext('2d');

// Create the horizontal stacked bar chart
const item11 = new Chart(ctx11, {
    type: 'bar',
    data: data11,
    options: options11,
});











// Data for the horizontal stacked bar graph
const data12 = {
    labels: ['<10%', '10%-15%','15%-20%','20%-25%','<=25%'],
    datasets: [
        {
            label: '# Unit Lonas',
            data: [34, 40, 20, 6 , 0], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: '$ Volume Loans',
            data: [33, 39, 23, 4, 1], // Data values for Series 2
            backgroundColor: ColorC, // Color for Series 2
        },
    ],
};

// Configuration options for the horizontal stacked bar graph
const options12 = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x', // Display bars horizontally
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        x: {
            stacked: false,
        },
        y: {
            stacked: false,
        },
    },
};

// Get the canvas element to render the chart
const ctx12 = document.getElementById('item12').getContext('2d');

// Create the horizontal stacked bar chart
const item12 = new Chart(ctx12, {
    type: 'bar',
    data: data12,
    options: options12,
});




















// Data for the horizontal stacked bar graph
const data13 = {
    labels: ['# Total','# Charged-Off'],
    datasets: [
        {
            label: 'Grade A',
            data: [10,11], // Data values for Series 1
            backgroundColor: ColorC, // Color for Series 1
        },
        {
            label: 'Grade B',
            data: [15,13], // Data values for Series 2
            backgroundColor: ColorI, // Color for Series 2
        },
        {
            label: 'Grade C',
            data: [5,6], // Data values for Series 3
            backgroundColor: ColorJ, // Color for Series 3
        },
        {
            label: 'Grade D',
            data: [10,11], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: 'Grade E',
            data: [15,13], // Data values for Series 2
            backgroundColor: ColorK, // Color for Series 2
        },
        {
            label: 'Grade F',
            data: [5,6], // Data values for Series 3
            backgroundColor: ColorL, // Color for Series 3
        },
        {
            label: 'Grade G',
            data: [10,10], // Data values for Series 3
            backgroundColor: ColorA, // Color for Series 3
        },
    ],
};

// Configuration options for the horizontal stacked bar graph
const options13 = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // Display bars horizontally
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

// Get the canvas element to render the chart
const ctx13 = document.getElementById('item13').getContext('2d');

// Create the horizontal stacked bar chart
const item13 = new Chart(ctx13, {
    type: 'bar',
    data: data13,
    options: options13,
});





function hexToRgb(hex) {
  // Remove the hash character if it exists
  hex = hex.replace(/^#/, '');

  // Parse the RGB values
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}












// Data for the filled line chart
const data15 = {
    labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6'],
    datasets: [
        {
            label: '# Unit',
            data: [10, 25, 18, 35, 30, 45, 10, 27, 18, 35, 10, 25, 10, 25, 18, 35, 30, 45, 10, 27, 18, 35, 10, 25, 10, 25, 18, 35, 30, 45, 10, 27, 18, 35, 10, 25, 10, 27, 18, 35, 10, 25], // Data values for Series 1
            fill: true, // Fill the area under the line
            backgroundColor: `rgba(${hexToRgb(ColorE).r}, ${hexToRgb(ColorE).g}, ${hexToRgb(ColorE).b}, 0.6)`, // Fill color
            borderColor: ColorE, // Line color
            borderWidth: 2, // Line width
            cubicInterpolationMode: 'monotone', // Smooth curve
        },
        {
            label: '$ Dollar',
            data: [25, 10, 30, 35, 25, 55, 25, 10, 20, 35, 25, 35, 25, 10, 30, 35, 25, 55, 25, 10, 20, 35, 25, 35, 25, 10, 30, 35, 25, 55, 25, 10, 20, 35, 25, 35, 10, 27, 18, 35, 10, 25], // Data values for Series 1
            fill: true, // Fill the area under the line
            backgroundColor: `rgba(${hexToRgb(ColorC).r}, ${hexToRgb(ColorC).g}, ${hexToRgb(ColorC).b}, 0.6)`, // Fill color
            borderColor: ColorC, // Line color
            borderWidth: 2, // Line width
            cubicInterpolationMode: 'monotone', // Smooth curve
        },
    ],
};

// Configuration options for the filled line chart
const options15 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            beginAtZero: true, 
        }
    }
};

// Get the canvas element to render the chart
const ctx15 = document.getElementById('item15').getContext('2d');

// Create the filled line chart
const item15 = new Chart(ctx15, {
    type: 'line',
    data: data15,
    options: options15,
});

















// Data for the horizontal stacked bar graph
const data17 = {
    labels: ['36 Months', '60 Months'],
    datasets: [
        {
            label: '# Unit Lonas',
            data: [10, 22], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: '$ Volume Loans',
            data: [15, 33], // Data values for Series 2
            backgroundColor: ColorC, // Color for Series 2
        },
    ],
};

// Configuration options for the horizontal stacked bar graph
const options17 = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x', // Display bars horizontally
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        x: {
            stacked: false,
        },
        y: {
            stacked: false,
        },
    },
};

// Get the canvas element to render the chart
const ctx17 = document.getElementById('item17').getContext('2d');

// Create the horizontal stacked bar chart
const item17 = new Chart(ctx17, {
    type: 'bar',
    data: data17,
    options: options17,
});




// Data for the horizontal stacked bar graph
const data18 = {
    labels: ['36 Months', '60 Months'],
    datasets: [
        {
            label: '# Unit Lonas',
            data: [10, 22], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: '$ Volume Loans',
            data: [15, 33], // Data values for Series 2
            backgroundColor: ColorC, // Color for Series 2
        },
    ],
};

// Configuration options for the horizontal stacked bar graph
const options18 = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x', // Display bars horizontally
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        x: {
            stacked: false,
        },
        y: {
            stacked: false,
        },
    },
};

// Get the canvas element to render the chart
const ctx18 = document.getElementById('item18').getContext('2d');

// Create the horizontal stacked bar chart
const item18 = new Chart(ctx18, {
    type: 'bar',
    data: data18,
    options: options18,
});







































const data19 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: '# Unit',
            data: [10, 25, 18, 35, 30, 45, 10, 27, 18, 35, 10, 25], // Data values for Series 1
            fill: false, // Fill the area under the line
            backgroundColor: `rgba(${hexToRgb(ColorE).r}, ${hexToRgb(ColorE).g}, ${hexToRgb(ColorE).b}, 0.6)`, // Fill color
            borderColor: ColorE, // Line color
            borderWidth: 2, // Line width
            cubicInterpolationMode: 'monotone', // Smooth curve
        },
        {
            label: '$ Dollar',
            data: [25, 10, 30, 35, 25, 55, 25, 10, 20, 35, 25, 35], // Data values for Series 1
            fill: false, // Fill the area under the line
            backgroundColor: `rgba(${hexToRgb(ColorC).r}, ${hexToRgb(ColorC).g}, ${hexToRgb(ColorC).b}, 0.6)`, // Fill color
            borderColor: ColorC, // Line color
            borderWidth: 2, // Line width
            cubicInterpolationMode: 'monotone', // Smooth curve
        },
    ],
};

// Configuration options for the filled line chart
const options19 = {
    responsive: true,
    maintainAspectRatio: false,
    scales:{
       x: {
            grid: {
                display: false
            }
        },
        y: {
            beginAtZero: true, 
        }
    }
};

// Get the canvas element to render the chart
const ctx19 = document.getElementById('item19').getContext('2d');

// Create the filled line chart
const item19 = new Chart(ctx19, {
    type: 'line',
    data: data19,
    options: options19,
});













