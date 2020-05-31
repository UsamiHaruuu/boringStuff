let revenue = [1200, 770, 600, 1400, 1410, 1210];
let cost = [72, 65, 60, 150, 0, 20];

const dummy_data = {
  labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "March"],
  datasets: [
    {
      label: "Revenue",
      borderColor: "#36d1cf",
      backgroundColor: "transparent",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: revenue
    },
    {
      label: "Art Supplies",
      borderColor: "#130049",
      backgroundColor: "transparent",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: cost
    }
  ]
};
const options = {
  title: {
    display: true,
    text: "Revenue Rundown 2020"
  },
  responsive: true,
  tooltips: {
    mode: "nearest"
  }
};

let collectWrapper = {};
collectWrapper["data"] = dummy_data;
collectWrapper["option"] = options;

export { collectWrapper };
