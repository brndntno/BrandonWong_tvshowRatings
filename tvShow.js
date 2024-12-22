let shows = []
let ratings = []

async function getData() {
    const response = await fetch("top250tvshows.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
              const row = elem.split(",");
              const show = row[0];
              const rating = row[3];
              shows.push(show)
              ratings.push(rating)
              console.log(show, rating);
    });
}
getData()
    //end of functions
    //call the function to test if you see the image on the left in the console
async function displayChart() {
const ctx = document.getElementById('tvshowChart');
          new Chart(ctx, {
            type: 'bar',
            data: {
                labels: shows,
                datasets: [{
                label: 'Top 250 TV Shows',
                data: ratings,
                borderColor: '#36A2EB',
                backgroundColor: '#FFB1C1',
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: false
                }
              }
            }
          });
        }
displayChart()