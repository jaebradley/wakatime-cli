export default function getRegex(filter) {
  const lastSlash = filter.lastIndexOf('/');
  if (lastSlash > -1) {
    return new RegExp(filter.slice(1, lastSlash), filter.slice(lastSlash + 1));
  }

  return new RegExp(filter);
}
