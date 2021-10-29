const asyncFunc = async function (url) {
  const response = await fetch(url);

  console.log(response.status);

  if (response.status !== 200) {
    return { error: "Something went wrong" };
  } else {
    const data = await response.json();

    return data;
  }
};

const init = async function () {
  const result = await asyncFunc(
    "https://api.openweathermap.org/data/2.5/weather?q=Leeds&appid=393609ac7b2e5f25ccdd00e626ee13ddx"
  );

  console.log(result);
};

init();
