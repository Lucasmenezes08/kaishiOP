export default function ButtonCarroussel ({text,action,style} : any){
    return (
        <button className={`${style}`} onClick={action}>{text}</button>
    )
}