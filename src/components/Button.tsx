type buttonProp = {
    children: React.ReactNode
    size?: string
}

export default function Button({children,size='py-3 px-4'}:buttonProp){
    return(
        <button className={`${size} rounded-lg bg-white text-2xl text-blue-900 font-sans font-semibold`}>{children}</button>
    )
}
