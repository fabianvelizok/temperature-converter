function toF (temperature) {
  return (temperature * 9/5) + 32;
}

function toC (temperature) {
  return (temperature - 32) * 5/9;
}

module.exports = {
  toF: toF,
  toC: toC
};