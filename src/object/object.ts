export default function objectSample() {
  const a: object = {
    name: 'yuta',
    age: 23,
  }
  //a.nameはエラーが発生

  const country: {
    lang: string
    name: string
  } = {
    lang: 'ja',
    name: 'japan',
  }
  console.log('lang:', country.lang)

  const capitals: {
    [countryName:string]:string
  } = {
    japan: 'Tokyo',
    korea: 'Seoul'
  }

  capitals.China = 'Beijing',
  capitals.Canada = 'Ottawa'
}
