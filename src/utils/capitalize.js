const capitalizeFirstLetter = (val) => {
  if (!val) return "";
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
};

export default capitalizeFirstLetter;
/**
 * Results:
 *
 * stringTest: Of course, nothing changes =))
 * capString: Trungquandev
 */
