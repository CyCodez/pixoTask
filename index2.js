document.addEventListener("DOMContentLoaded", function () {
  var data = [
    {
      date: "2023-12-27",
      signUps: 2,
    },
    {
      date: "2023-12-26",
      signUps: 5,
    },
    {
      date: "2023-12-25",
      signUps: 9,
    },
    {
      date: "2023-12-24",
      signUps: 4,
    },
    {
      date: "2023-12-23",
      signUps: 2,
    },
    {
      date: "2023-12-22",
      signUps: 7,
    },
    {
      date: "2023-12-21",
      signUps: 3,
    },
    {
      date: "2023-12-20",
      signUps: 12,
    },
    {
      date: "2023-12-19",
      signUps: 9,
    },
    {
      date: "2023-12-18",
      signUps: 7,
    },
    {
      date: "2023-12-17",
      signUps: 2,
    },
    {
      date: "2023-12-16",
      signUps: 3,
    },
    {
      date: "2023-12-15",
      signUps: 3,
    },
    {
      date: "2023-12-14",
      signUps: 5,
    },
    {
      date: "2023-12-13",
      signUps: 8,
    },
    {
      date: "2023-12-12",
      signUps: 13,
    },
    {
      date: "2023-12-11",
      signUps: 7,
    },
    {
      date: "2023-12-10",
      signUps: 2,
    },
    {
      date: "2023-12-09",
      signUps: 5,
    },
    {
      date: "2023-12-08",
      signUps: 3,
    },
  ];

  var dates = data.map(function (item) {
    return item.date;
  });

  var signUps = data.map(function (item) {
    return item.signUps;
  });

  var ctx = document.getElementById("signUpsChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates.reverse(),
      datasets: [
        {
          label: "Signups Per Day",
          backgroundColor: "#f03e3e",
          borderColor: "#f03e3e",
          borderWidth: 1,
          borderRadius:10,
          data: signUps.reverse(),
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
   var resizeObserver = new ResizeObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.contentRect.width < 600) {
                chart.options.maintainAspectRatio = true;
                chart.options.aspectRatio = 1;
            } else {
                chart.options.maintainAspectRatio = false;
            }
            chart.update();
        });
    });

    resizeObserver.observe(document.querySelector("#signUpsChart"));
});


document.addEventListener("DOMContentLoaded", function () {
  var data = [
    {
      businessName: "cta media concepts",
      name: "taiwo adebayo",
      phone: "wa.me/+2347033618481",
      signedUp: "7 hours ago",
    },
    {
      businessName: "teddy kivisi",
      name: "teddy kivisi",
      phone: "wa.me/+97433562179",
      signedUp: "9 hours ago",
    },
    // Add the rest of your data here
  ];

  var tableBody = document.querySelector("#signUpsTable tbody");

  data.forEach(function (item) {
    var row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.businessName}</td>
            <td>${item.name}</td>
            <td>${item.phone}</td>
            <td>${item.signedUp}</td>
        `;
    tableBody.appendChild(row);
  });
});
