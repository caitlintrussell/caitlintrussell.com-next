export const getActivePageName = (pathname: string) => {
  // a single level of routing is used, throw out any extra

  const pathnameWithoutSlash = pathname.slice(1)

  return pathnameWithoutSlash.split('/')[0]
}
