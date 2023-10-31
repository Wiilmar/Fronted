import PropTypes from "prop-types";

export const Motopajero = ({name, lastName, age}) => {
    return (
        <>
            <h1>Motero</h1>
            <h2>nombre: {name}</h2>
            <h2>apellido: {lastName}</h2>
            <h2>edad: {age}</h2>
        </>
    )
}

Motopajero.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number.isRequired
}

Motopajero.defaultProps = {
    name: "Daniel",
    lastName: "Lubo",
    age: 19
}