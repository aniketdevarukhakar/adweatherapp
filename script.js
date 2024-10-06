let api = fetch(
  `https://api.weatherapi.com/v1/current.json?key=1c082a85f59149f2a22142553240410&q=rajapur&aqi=yes`
);
let cityName = document.getElementById("city");
let weekDay = document.getElementById("weekday");
let monthDate = document.getElementById("month-date");
let time = document.getElementById("time");
let temp = document.getElementById("temp");
let bannerIcon = document.querySelector("#banner-img");
let dayNight = document.querySelector("#daynight");

api
  .then((data) => {
    return data.json();
  })
  .then((showData) => {
    cityName.innerText = showData.location.name;

    let date = new Date(showData.location.localtime);
    let week_day = { weekday: "long" };
    let month_date = { month: "short", day: "numeric" };

    week_day = date.toLocaleDateString("en-US", week_day);
    month_date = date.toLocaleDateString("en-US", month_date);
    let timetext = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    weekDay.innerText = week_day;
    monthDate.innerText = month_date;
    time.innerText = timetext;

    temp.innerHTML =
      Math.floor(showData.current.temp_c) +
      '<span class="unit"><sup>o</sup>C</span>';
    let wrapper = document.getElementById("wrapper");
    let image = showData.current.condition.icon;
    dayNight.innerText = showData.current.condition.text;

    if (dayNight === "Sunny") {
      wrapper.style.background = "#fef5d2";
      bannerIcon = bannerIcon.setAttribute("src", image);
    } else {
      wrapper.style.background = "#eff3f9";
      bannerIcon = bannerIcon.setAttribute("src", image);
    }
  });

function search(ele) {
  if (event.keyCode == 13) {
    let searchValue = ele.value;
    console.log(searchValue);

    let updateAPI = fetch(
      `https://api.weatherapi.com/v1/current.json?key=1c082a85f59149f2a22142553240410&q=${searchValue}&aqi=yes`
    );
    updateAPI
      .then((data) => {
        return data.json();
      })
      .then((showData) => {
        let date = new Date(showData.location.localtime);
        let week_day = { weekday: "long" };
        let month_date = { month: "short", day: "numeric" };

        week_day = date.toLocaleDateString("en-US", week_day);
        month_date = date.toLocaleDateString("en-US", month_date);
        let timetext = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });

        weekDay.innerText = week_day;
        monthDate.innerText = month_date;
        time.innerText = timetext;

        cityName.innerText = showData.location.name;
        // day.innerText = showData.location.localtime;
        temp.innerHTML =
          Math.floor(showData.current.temp_c) +
          '<span class="unit"><sup>o</sup>C</span>';

        let wrapper = document.getElementById("wrapper");
        let image = showData.current.condition.icon;
        dayNight.innerText = showData.current.condition.text;

        if (dayNight === "Sunny") {
          wrapper.style.background = "#fef5d2";
          bannerIcon = bannerIcon.setAttribute("src", image);
        } else {
          wrapper.style.background = "#eff3f9";
          bannerIcon = bannerIcon.setAttribute("src", image);
        }
      });
  }
}
