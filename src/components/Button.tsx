type buttonProp = {
    children: React.ReactNode
}

export default function Button({children}:buttonProp){
    return(
        <button className="py-3 px-4 rounded-lg bg-white text-2xl text-blue-900 font-sans font-semibold">{children}</button>
    )
}
