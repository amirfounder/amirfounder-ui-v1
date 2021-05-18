export const getGameTitle = (pathname) => {
  let tempTitle = pathname
  tempTitle = tempTitle.replace('/', '')
  tempTitle = tempTitle.replace('-', ' ')
  const tempTitleArr = tempTitle.split(' ')
  let title = ''
  for (let i = 0; i < tempTitleArr.length; i++) {
    title += (tempTitleArr[i].charAt(0).toUpperCase() + tempTitleArr[i].slice(1) + ' ')
  }
  title.trim()
  return title
}