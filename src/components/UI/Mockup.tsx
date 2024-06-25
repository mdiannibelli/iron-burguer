import { useState } from "react"

const Mockup = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const mockups = [
        {
            bg: "bg-mockup",
            title: "Hard Rock",
            subtitle: "Cheese burguer",
            description: "Queso provoleta con chimichurri, morcilla, morrón a la plancha, cebolla roja y ketchup ahumado"
        },
        {
            bg: "bg-mockup2",
            title: "Fast Burguer",
            subtitle: "Double bacon",
            description: "Doble hamburguesa, doble cheddar, doble panceta, cebolla caramelizada y ketchup."
        },
        {
            bg: "bg-mockup3",
            title: "Big Burguer",
            subtitle: "Triple XXL",
            description: "Triple carne con salsa barbacoa, queso cheddar, panceta ahumada, pepinos en pickle y ketchup."
        },
    ]
    return (
        <section className="grid grid-cols-3 w-full h-full my-8 bg-black">
            {mockups.map((mockup, index) => (
                <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {
                        hoveredIndex === index && (
                            <div>
                                <div className="absolute top-[14rem] z-10 w-full animate-fade-in-right">
                                    <h1 className="px-2 text-4xl 2xl:text-6xl uppercase text-primary text-center font-semibold ">{mockup.title}</h1>
                                    <span className="text-xs lg:text-md 2xl:text-2xl tracking-[0.5rem] 2xl:tracking-[1.2rem] font-light flex justify-center text-white uppercase">{mockup.subtitle}</span>
                                </div>
                                <div className="absolute top-[24rem] left-4 lg:left-6 2xl:left-12 z-10 animate-fade-in-left">
                                    <p className="text-xs 2xl:text-md text-white font-light text-center md:max-w-[220px] lg:max-w-[300px] 2xl:max-w-[520px]">{mockup.description}</p>
                                </div>
                            </div>
                        )
                    }
                    <div className={`${mockup.bg} ${hoveredIndex === index && 'saturate-120 sepia-[0] opacity-30'} sepia-[.95] h-[720px]  w-full opacity-[0.5] bg-center object-cover bg-no-repeat duration-700 transition-all`} />
                </div>
            ))}
        </section>
    )
}

export default Mockup