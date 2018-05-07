const formatTime = (time) => {
  let formattedTime = '';

  if (time.getUTCDate() > 1) {
    formattedTime += `${time.getUTCDate() - 1} days `;
  }

  if (time.getUTCHours() > 0) {
    formattedTime += `${time.getUTCHours()} hrs `;
  }

  if (time.getUTCMinutes() > 0) {
    formattedTime += `${time.getUTCMinutes()} mins `;
  }

  if (time.getUTCHours() <= 0) {
    formattedTime += `${time.getUTCSeconds()} secs `;
  }

  return formattedTime.trim();
};

export default formatTime;
