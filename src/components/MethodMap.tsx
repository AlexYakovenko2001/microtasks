type NewComponentPropsType = {
    car: Array<CarType>
}
type CarType = {
    manufacturer:string,
    model:string
}

export function MethodMap (props: NewComponentPropsType) {
    return (
             <table>
                 <tbody>
                 {props.car.map((objectCarType, index)=>{
                     return(
                         <tr key={index}>
                             <td>{index + 1}</td>
                             <td>{objectCarType.manufacturer}</td>
                             <td>{objectCarType.model}</td>
                         </tr>
                     )
                 })}
                 </tbody>
             </table>
    )
}