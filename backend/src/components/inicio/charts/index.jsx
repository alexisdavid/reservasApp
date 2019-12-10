import React from "react";
import ChartistGraph from "react-chartist";

const SalesCharts = () => {
  var data = {
    labels: [
      "En",
      "Fe",
      "Ma",
      "Ab",
      "My",
      "Jn",
      "Jl",
      "Ag",
      "Sp",
      "Oc",
      "Nv",
      "Dc"
    ],
    series: [[500, 500, 300, 800, 500, 400, 700, 800, 900, 1000, 1100, 1200]]
  };

  var options = {
    width: "100%",
    height: "85%"
  };
  var type = "Bar";
  var aspectRatio = "ct-octave";

  return (
    <div class="col-md-6">
      <div class="card card-chart">
        <div class="card-header card-header-primary">
          <ChartistGraph
            className={aspectRatio}
            data={data}
            options={options}
            type={type}
          />
        </div>
        <div class="card-body">
          <h4 class="card-title">Daily Sales</h4>
          <p class="card-category">
            <span class="text-success">
              <i class="fa fa-long-arrow-up"></i> 55%{" "}
            </span>{" "}
            increase in today sales.
          </p>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">access_time</i> updated 4 minutes ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCharts;
