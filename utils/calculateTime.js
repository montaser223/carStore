const checkCarLastEntry = (_lastEntery) => {
  const currentDate = new Date();
  const lastEntery = new Date(_lastEntery);
  if (currentDate.getFullYear() !== lastEntery.getFullYear()) return true;
  if (currentDate.getMonth() !== lastEntery.getMonth()) return true;
  const timeDifference =
    (currentDate.getTime() - lastEntery.getTime()) / (1000 * 60);
  return timeDifference > 1 ? true : false;
};

module.exports = checkCarLastEntry;
