// import React,{Component}from 'react';

// export class Componente extends Component {
//     render() {
//         return(
//             <p>
//                 componente basdo en clases
//             </p>
//         )
//     }
// };




//  function Componente() {
//     return(
//         <p>componente basado en funciones</p>
//     )
// }
// export default Componente

export const Titulo = ({nombre})=> {
    return (
        <h1>{nombre}</h1>
    )
}
export const Item = ({valor})=> {
    return (
        <h1>{valor}</h1>
    )
}
export const Input = ({placeholder})=> {
    return (
        <input type="text" placeholder={placeholder} />
    )
}