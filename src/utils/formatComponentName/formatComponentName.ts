function formatComponentName(name: string) {
  return (
    name.charAt(0).toUpperCase() +
    name
      .slice(1)
      .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
      .replace(' ', '')
      .trim()
  );
}

export default formatComponentName;
