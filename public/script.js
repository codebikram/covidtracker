$(document).ready(function () {
    getCountryData("India");
    $("#country").change(function () {
        let selectedCountry = $(this).children("option:selected").val();
        // console.log("data--->", selectedCountry);
        getCountryData(selectedCountry);

    })
})

function getCountryData(selectedCountry) {
    $.ajax({
        url: "/getdata",
        type: "POST",
        data: { country: selectedCountry },
        success: function (data) {
            // console.log(data.data.countryName);
            var table =
                `<table class="table table-dark table-hover table-responsive p-2">
                        <thead>
                           <tr>
                              <th>Country Name</th>
                              <th>Last Updated</th>
                              <th>Today Cases</th>
                              <th>Today Recoverd</th>
                              <th>Today Deaths</th>
                              <th>Total Cases</th>
                              <th>Active Cases</th>
                              <th>Recovered</th>
                              <th>Critical</th>
                              <th>Total Deaths</th>
                              <th>Country Flag</th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr>
                                  <td>${data.data.countryName}</td>
                                  <td>${data.data.updatedDate}</td>
                                  <td>${data.data.todayCases}</td>
                                  <td>${data.data.todayRecovered}</td>
                                  <td>${data.data.todayDeaths}</td>
                                  <td>${data.data.cases}</td>
                                  <td>${data.data.active}</td>
                                  <td>${data.data.recovered}</td>
                                  <td>${data.data.critical}</td>
                                  <td>${data.data.deaths}</td>
                                  <td><img src="${data.data.countryFlag}"/></td>
                            </tr>
                          </tbody>
                     </table>`
            $('.results').html(table)

        },
    })
}

