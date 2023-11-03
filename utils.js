export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function secondsToHms(d) {
  var m = Math.floor(d / 1000 / 60);
  var s = Math.floor((d % 3600) % 60);

  var mDisplay = m > 0 ? m + " m " : "";
  var sDisplay = s > 0 ? s + " s" : "";
  return mDisplay + sDisplay;
}
