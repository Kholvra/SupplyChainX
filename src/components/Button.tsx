type buttonProp = {
    children: React.ReactNode
}

export default function Button({children}:buttonProp){
    return(
        <button className="py-3 px-4 text-2xl rounded-lg bg-white text-blue-900 font-sans">{children}</button>
    )
}
