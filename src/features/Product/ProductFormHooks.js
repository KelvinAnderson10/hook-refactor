import { useState } from "react"
import { useDeps } from "../../context/DepContext"

const ProductFormHooks = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [id, setId] = useState('')
    const [productName, setProductName] = useState('')
    const [error, setError] = useState(null)
    const{productService: {addProduct}} = useDeps()

    const handleOnInputProductName = (e) => {
        setProductName(e.target.value)
    }

    const handleOnInputId = (e) => {
        setId(e.target.value)
    }

    const handleSaveProduct = async () => {
        console.log(id);
        console.log(productName);
        setIsLoading(true)
        setError(null)
        try {
            const result = await addProduct({
                id: id,
                productName: productName
            })
            if (result) alert(result)
            setIsLoading(false)
            setError(null)
            setId('')
            setProductName('')
        } catch (e) {
            setIsLoading(false)
            setError(e)
            setId('')
            setProductName('')            
        }
    }

    return{
        isLoading, id, productName, error, handleOnInputId, handleOnInputProductName, handleSaveProduct
    }
}

export default ProductFormHooks