import FormInput from "../../components/Form";
import ProductFormHooks from "./ProductFormHooks";

const ProductForm = () => {
    const {isLoading, id, productName, error, handleOnInputId, handleOnInputProductName, handleSaveProduct} = ProductFormHooks()
    return(
        <div>
            <FormInput id='id' label='ID' value={id} onChange={handleOnInputId}></FormInput>
            <FormInput id='productName' label="Product Name" value={productName} onChange={handleOnInputProductName}></FormInput>
            <button disabled={isLoading} onClick={handleSaveProduct}>Save</button>
            {error && <div>Oops {error}</div>}
        </div>
        )
    
}

export default ProductForm;