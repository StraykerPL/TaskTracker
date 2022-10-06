const TextBox = ({ name, type, placeholder, onChange, startValue }) => {
    return (
        <div className="form-control">
            <label>{name}</label>
            <input type={type} placeholder={placeholder} value={startValue} onChange={onChange} />
        </div>
    );
};

export default TextBox;