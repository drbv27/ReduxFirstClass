import React from 'react'

const products = [
    {
        name: 'Chocorramo',
        price: 2500
    },
    {
        name: 'Doritos',
        price: 1500
    },
    {
        name: 'Chocolatina',
        price: 200
    },
    {
        name: 'Mani',
        price: 500
    },

]

function SearchFilter() {

    const [query, setQuery] = React.useState('')
    const [product, setProducts] = React.useState([])


    /* Simular la peticion a un API */
    React.useEffect(()=>{
        const fetchData = async() => {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setProducts(products)
        }
        fetchData()
    })


    let filtered = product.filter(
        product => product.name.toLowerCase().includes(query.toLocaleLowerCase())
    )

    return (
        <div className="container">
            <div className="form-group">
                <label className="">Filtra los productos aqui</label>
                <input type="text" className='form-control' value={query} onChange={ (event) => {  setQuery(event.target.value)}}/>
            </div>
            <ul>
                {filtered.map(
                    producto => <div className="card div-4">{producto.name}</div>
                )}
            </ul>
        </div>

    )

}

export default SearchFilter;