
const FormInput = (props) => {
    const {id, label, type='text', value, onChange} = props
    return (
        <>
            <label>{label}</label>
            <input name={id} type={type} value={value} onChange={onChange}></input>
        </>
    )
}

export default FormInput;