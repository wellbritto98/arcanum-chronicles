import './DatalistNomes.css'

const DatalistNomes = ({ id, name, placeholder, value, onChange, options }) => {
    return (
        <div className='datalist-nomes'>
            <input
                list={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <datalist id={id}>
                {options.map((option) => (
                    <option value={option} />
                ))}
            </datalist>
        </div>
    );
}