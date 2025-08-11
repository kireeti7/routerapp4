import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <div>
      <input type='search' placeholder='search product' />
    </div>
    <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>new</Link>
    </nav>
    </>
  )
}

export default Products
