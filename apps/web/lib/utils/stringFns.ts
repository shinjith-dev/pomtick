export const padStart = (num: number): string => String(num).padStart(2, "0");

export const toSentenceCase = (str: string): string => {
  const s: string | undefined =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      ?.join(" ");

  if (s === undefined) return "";

  return s.charAt(0).toUpperCase() + s.slice(1);
};
