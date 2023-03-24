export const logMessage = (message: string, username = 'no-name'): void => {
  console.log('messeage', message)
  console.log('username', username)
}

export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}

type logMessage1 = (message: string) => void
export const logmessage3: logMessage1 = (message) => {
  console.log('function', message)
}
