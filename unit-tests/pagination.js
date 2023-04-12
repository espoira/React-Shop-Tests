const numbers = [1, 2, 3, 4, 5];

const pagination = numbers.map((number) => {

  return (
    <a id={`link-${number}`} className="pageNumber">
      {number}
    </a>
  )
  
})