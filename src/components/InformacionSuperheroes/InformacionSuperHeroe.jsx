const InformacionSuperHeroe = ({
    name,
    age,
    powers
}) => {
    
    return (
        <ul className="info">
            <li><strong>Nombre: </strong>{name}</li>
            <li><strong>Edad: </strong>{age}</li>
            <li><strong>Poderes: </strong></li>
            <ul className="poderes">
                {powers.map(power =>(
                    <li key={power.index}>{power}</li>
                ))}
            </ul>
        </ul>
    )
}

export default InformacionSuperHeroe;
