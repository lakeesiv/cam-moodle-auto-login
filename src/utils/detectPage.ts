export const detectPage = (url: string): "raven" | "moodle" | null => {
  return url.includes("raven")
    ? "raven"
    : url.includes("vle")
    ? "moodle"
    : null;
};
