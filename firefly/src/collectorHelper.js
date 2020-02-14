let arr = Array.from({ length: 7 }, (_, i) => Math.random() * 10);
const dummy_data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Some dummy data",
      backgroundColor: "rgba(255,99,1,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: arr
    }
  ]
};
const options = {
  title: {
    display: true,
    text: "text dummy data"
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
