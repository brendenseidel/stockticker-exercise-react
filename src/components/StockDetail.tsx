export default function StockDetail(props: {title: string, detail: number}) {
  const isInit = props.detail === 0;
  const isChange = props.title === "Change";
  let detail = props.detail.toString()
  let isNegative = false;
  let isPositive = false;

  if (!isInit && isChange) {
    const _isNegative = detail.includes('-');
    if (_isNegative) {
      isNegative = true
    } else {
      detail = '+' + detail;
      isPositive = true;
    }
  }

  let valueClassNames = ''
  if (!isInit && isChange) {
    valueClassNames = `
      font-bold 
      ${isPositive ? 'text-green-700': ''} 
      ${isNegative ? 'text-red-700' : ''}
    `
  } 

  return (
    <div className="flex">
      <span>{props.title}</span>
      <span
        style={{marginBottom: '6px'}} 
        className='grow border-b-black border-b-2 mr-1 ml-1 border-dotted'></span>
      <span className={valueClassNames}>
          {isInit ? 'Waiting...' : detail}
        </span>
    </div>
  )
}