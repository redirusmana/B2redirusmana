window.onload = function () {

  CanvasJS.addColorSet("blueTheme",
                [
                "#039be5",
                "#0288d1",
                "#0277bd",
                "#01579b",
                "#1e88e5",
                "#1976d2",
                "#1565c0",
                "#0d47a1",
                "#03a9f4"                
                ]);

  var chart1 = new CanvasJS.Chart("splinechart", {
    animationEnabled: true,
    colorSet: "blueTheme",
    title:{ fontFamily: "tahoma",
      text: "Income Every Year"
    },
    axisY: {
      title: "Eaerning",
      valueFormatString: "$####",
      stripLines: [{
        value: 2500000,
        color: "#01579b",
        labelFontColor: "#01579b",
        label: "Average"
      }]
    },
    data: [{
      yValueFormatString: "$####",
      xValueFormatString: "YYYY",
      type: "spline",
      dataPoints: [
        { x: new Date(2012, 0), y: 1397000 },
        { x: new Date(2013, 0), y: 1872000 },
        { x: new Date(2014, 0), y: 2394000 },
        { x: new Date(2015, 0), y: 2140000 },
        { x: new Date(2016, 0), y: 2506000 },
        { x: new Date(2017, 0), y: 3386000 },
        { x: new Date(2018, 0), y: 2798000 },
        { x: new Date(2019, 0), y: 6704000 },
        { x: new Date(2020, 0), y: 6026000 }
      ]
    }]
  });

  var chart2 = new CanvasJS.Chart("barchart", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title:{
      fontFamily: "Tahoma",
      text: "Train Station",
      fontWeight:"lighter",
      fontSize:"28"
    },
    colorSet: "blueTheme",
    axisY: {
      title: "Visitor"
    },
    data: [{        
      type: "column",  
      showInLegend: true, 
      legendText: "Total Visitors = 114893",
      dataPoints: [
        { y: 13441,  label: "Station_1" },
        { y: 8485,  label: "Station_2" },
        { y: 6453,  label: "Station_3" },
        { y: 14494, label: "Station_4" },
        { y: 12485,  label: "Station_5" },
        { y: 11472,  label: "Station_6" },
        { y: 7446,  label: "Station_7" },
        { y: 12419,  label: "Station_8" },
        { y: 8419, label: "Station_9" },
        { y: 9490,  label: "Station_10" }
      ]
    }]
  });

  var chart3 = new CanvasJS.Chart("doughnutchart", {
    animationEnabled: true,
    title:{fontFamily: "tahoma",
      text: "Categories",
      horizontalAlign: "left"
    },
    colorSet: "blueTheme",
    data: [{
      type: "doughnut",
      startAngle: 60,
      indexLabelFontSize: 17,
      indexLabel: "{label} - #percent%",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 21678,  label: "Executive" },
        { y: 30423,  label: "Economy" },
        { y: 19478,  label: "Priority" },
        { y: 24740, label: "Business" },
        { y: 15985,  label: "Sleeper" }
      ]
    }]
  });

  

  setTimeout(() => {
    chart1.render();
    chart2.render();
    chart3.render();
  }, 1000);

}
