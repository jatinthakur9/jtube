export const API_KEY = "AIzaSyAb4RB5uHb_GeDFwT4EKOuVaEUWhnlnz4o";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
