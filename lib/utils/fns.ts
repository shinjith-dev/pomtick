export function isObject(val: any) {
  if (val === null) {
    return false;
  }
  return typeof val === "function" || typeof val === "object";
}
