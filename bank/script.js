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
            data: [0.005164,0.0048255], // Data values for Series 1
            backgroundColor: ColorC, // Color for Series 1
        },
        {
            label: 'Open Partial Paid Loans',
            data: [94.584874,94.632039], // Data values for Series 2
            backgroundColor: ColorE, // Color for Series 2
        },
        {
            label: 'Open Unpaid Loans',
            data: [4.1080583,4.072037], // Data values for Series 3
            backgroundColor: ColorD, // Color for Series 3
        },
        {
            label: 'Charge-off Loans',
            data: [1.301902,1.291097], // Data values for Series 3
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
            data: [7400, 5773, 5396, 7151, 11149, 12376, 12042, 13159, 12806, 12274, 13579, 12886, 12631, 12648, 9444, 8376, 6144, 5542, 5489, 4542, 4372, 4048, 3446, 2748, 2086, 5489], // Data values for Series 2 // Colors for Series 2
            backgroundColor: [ColorC, ColorC, ColorC, ColorC, ColorC,
             ColorI, ColorI, ColorI, ColorI, ColorI,
             ColorJ, ColorJ, ColorJ, ColorJ, ColorJ,
             ColorE, ColorE, ColorE, ColorE, ColorE,
             ColorK, ColorK, ColorK, ColorK, ColorK, 
             ColorL, ColorL, ColorL, ColorL, ColorL, ColorL, 
             ColorA, ColorA, ColorA, ColorA, ColorA, ColorA],
            label: ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5', 'C1', 'C2', 'C3', 'C4', 'C5',  'D1', 'D2', 'D3', 'D4', 'D5', 'E1', 'E2', 'E3', 'E4', 'E5', 'F-G'],
        },
        {
            data: [36869, 62657, 61188, 30093, 16700, 5489], // Data values for Series 1
            backgroundColor: [ColorC, ColorI, ColorJ, ColorE, ColorK, ColorL, ColorA], // Colors for Series 1
            label: ['A', 'B', 'C','D', 'E', 'F-G'],
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
            data: [108301250, 82836575, 78139000, 108881100, 168992925, 172026725, 165836975, 196803700, 181625075, 165751950, 189638675, 187590525, 193622000, 197722425, 143938625, 129060650, 95359875, 89189175, 94056750, 79308550, 79294550, 75907700, 63310875, 52633900, 40419750, 109612100], // Data values for Series 2 // Colors for Series 2
            backgroundColor: [ColorC, ColorC, ColorC, ColorC, ColorC,
             ColorI, ColorI, ColorI, ColorI, ColorI,
             ColorJ, ColorJ, ColorJ, ColorJ, ColorJ,
             ColorE, ColorE, ColorE, ColorE, ColorE,
             ColorK, ColorK, ColorK, ColorK, ColorK, 
             ColorL, ColorL, ColorL, ColorL, ColorL, ColorL, 
             ColorA, ColorA, ColorA, ColorA, ColorA, ColorA],
            label: ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5', 'C1', 'C2', 'C3', 'C4', 'C5',  'D1', 'D2', 'D3', 'D4', 'D5', 'E1', 'E2', 'E3', 'E4', 'E5', 'F-G'],
        },
        {
            data: [547150850, 882044425, 912512250, 486975000, 311566775, 109612100], // Data values for Series 1
            backgroundColor: [ColorC, ColorI, ColorJ, ColorE, ColorK, ColorL, ColorA], // Colors for Series 1
            label: ['A', 'B', 'C','D', 'E', 'F-G'],
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
            data: [67.15, 56.50], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: '$ Volume Loans',
            data: [32.85, 43.50], // Data values for Series 2
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
    labels: ['<10%', '10%-15%','15%-20%','20%-25%','>=25%'],
    datasets: [
        {
            label: '# Unit Lonas',
            data: [34.94, 40.51, 20.95, 2.94, 0.66], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: '$ Volume Loans',
            data: [33.28, 38.78, 23.27, 3.80, 0.87], // Data values for Series 2
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
    labels: ['% Unit Total','% Unit Charged-Off'],
    datasets: [
        {
            label: 'Grade A',
            data: [0.173,0.033], // Data values for Series 1
            backgroundColor: ColorC, // Color for Series 1
        },
        {
            label: 'Grade B',
            data: [0.294, 0.130], // Data values for Series 2
            backgroundColor: ColorI, // Color for Series 2
        },
        {
            label: 'Grade C',
            data: [0.287, 0.260], // Data values for Series 3
            backgroundColor: ColorJ, // Color for Series 3
        },
        {
            label: 'Grade D',
            data: [0.141, 0.265], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: 'Grade E',
            data: [0.078, 0.198], // Data values for Series 2
            backgroundColor: ColorK, // Color for Series 2
        },
        {
            label: 'Grade F',
            data: [0.021, 0.089], // Data values for Series 3
            backgroundColor: ColorL, // Color for Series 3
        },
        {
            label: 'Grade G',
            data: [0.004, 0.023], // Data values for Series 3
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
    labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5', 'C1', 'C2', 'C3', 'C4', 'C5', 'D1', 'D2', 'D3', 'D4', 'D5', 'E1', 'E2', 'E3', 'E4', 'E5', 'F1', 'F2', 'F3', 'F4', 'F5', 'G1', 'G2', 'G3', 'G4', 'G5'],
    datasets: [
        {
            label: '% Unit Charge-off Rate',
            data: [0.0135, 0.1559, 0.2224, 0.3776, 0.3677, 0.3959, 0.4152, 0.5244, 0.6559, 0.8962, 1.0457, 1.2029, 0.9659, 1.1939, 1.5989, 1.8147, 2.3438, 2.6344, 3.0607, 2.8181, 2.5618, 2.9150, 4.1497, 3.2751, 4.0748, 4.3282, 4.1927, 5.9119, 7.2934, 8.6694, 5.9375, 8.7649, 7.5581, 5.1546, 8.3333], // Data values for Series 1
            fill: true, // Fill the area under the line
            backgroundColor: `rgba(${hexToRgb(ColorE).r}, ${hexToRgb(ColorE).g}, ${hexToRgb(ColorE).b}, 0.6)`, // Fill color
            borderColor: ColorE, // Line color
            borderWidth: 2, // Line width
            cubicInterpolationMode: 'monotone', // Smooth curve
        },
        {
            label: '% Dollar Charge-off Rate',
            data: [0.014, 0.120, 0.179, 0.369, 0.305, 0.376, 0.454, 0.495, 0.649, 0.806, 0.935, 1.051, 0.923, 1.035, 1.375, 1.753, 2.231, 2.347, 2.561, 2.613, 2.375, 2.528, 3.726, 3.317, 4.031, 4.389, 4.640, 6.229, 8.522, 9.729, 7.024, 12.642, 7.434, 5.563, 9.852], // Data values for Series 1
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
            label: '% Unit Charge-Off Rate',
            data: [1.14, 1.64], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: '% Dollar Charge-Off Rate',
            data: [1.06, 1.59], // Data values for Series 2
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
    labels: ['Fractional', 'Whole'],
    datasets: [
        {
            label: '% Unit Charge-Off Rate',
            data: [2.53, 0.78], // Data values for Series 1
            backgroundColor: ColorE, // Color for Series 1
        },
        {
            label: '% Dollar Charge-Off Rate',
            data: [2.55, 0.79], // Data values for Series 2
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
    labels: ['37', '36', '35', '34', '33', '32', '31', '30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'],
    datasets: [
        {
            label: '% Unit Charge-Off Rate',
            data: [2.50, 2.33, 3.13, 0.00, 0.78, 0.00, 1.14, 2.81, 1.73, 0.36, 0.88, 1.69, 1.28, 1.63, 1.11, 1.11, 1.47, 0.81, 0.87, 0.39, 0.67, 0.85, 1.41, 1.01, 1.06, 1.22, 1.27, 0.97, 1.07, 0.92, 0.81, 1.14, 1.13, 1.08, 1.36, 1.32, 1.39, 1.31], // Data values for Series 1
            fill: false, // Fill the area under the line
            backgroundColor: `rgba(${hexToRgb(ColorE).r}, ${hexToRgb(ColorE).g}, ${hexToRgb(ColorE).b}, 0.6)`, // Fill color
            borderColor: ColorE, // Line color
            borderWidth: 2, // Line width
            cubicInterpolationMode: 'monotone', // Smooth curve
        },
        {
            label: '% Dollar Charge-Off Rate',
            data: [0.99, 0.64, 2.23, 0.00, 0.20, 0.00, 1.32, 3.81, 1.72, 0.23, 0.61, 2.39, 1.94, 1.75, 1.29, 0.98, 1.32, 0.78, 0.82, 0.36, 0.57, 0.89, 1.61, 0.90, 0.94, 1.07, 1.40, 0.93, 1.04, 0.77, 0.84, 1.11, 1.01, 1.00, 1.27, 1.25, 1.46, 1.26], // Data values for Series 1
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













