// is active link check
export const isActiveLink = (menuPath?: string, routePath?: string) => {
  if (menuPath && routePath) {
    return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
  }
};
