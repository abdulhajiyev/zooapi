import React from 'react'
import axios from 'axios'

const Animal = ({ type }) => {
    const [animal, setAnimal] = React.useState(null)

    React.useEffect(() => {
        axios.get(`http://localhost:3002/api/getType/${type}`)
            .then(res => {
                setAnimal(res.data)
            })
    }, [type])

    if (!animal || !animal.length) return <h1 className="text-center font-bold text-3xl">Not found animal for {type}</h1>
    return (
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:grid-cols-3 lg:max-w-full">
            {animal.map((animal) => (
                <div key={animal.name} className="overflow-hidden bg-white rounded-lg shadow">
                    <div className="p-5">
                        <div class="relative">
                            <div className="w-full h-96 bg-cover bg-top rounded-lg" style={{ backgroundImage: `url(${animal.image_link})` }} />
                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">{animal.latin_name}</span>
                            </div>
                        </div>
                        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{animal.habitat}</span>
                        <p className="mt-5 text-2xl font-semibold">{animal.name}</p>
                        <p className="mt-4 text-base text-gray-600">{animal.diet}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Animal