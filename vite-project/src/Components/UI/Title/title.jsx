const Title = (props)=> {
    const {children, parag}= props
    return(
        <div className="mb-10 text-center">
            <h3 className="text-3xl font-bold sm:text-4xl">{children}</h3>
            <p className="mt-3 text-base sm:text-2lg">{parag}</p>
        </div>
    )
}

export default Title;