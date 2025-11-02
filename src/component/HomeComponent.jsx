import React from 'react'
import useFetch from '../Hooks/useFetch'
import '../assets/style/homeComponent.css'

const HomeComponent = () => {
    const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products')
    const flatData = Array.isArray(data) ? data.flat() : [];
    console.log(data)
    return (
        <>
            <div className='vishal'>

                {loading && (
                    <div className='loading'> <p>data is loading .... 🏍</p></div>
                )}

                {error && (
                    <div className='loading'> <p> Error : {error} 😥</p></div>
                )
                }

                {flatData && !loading && (
                    <div className='response_container'>
                        {
                            flatData.map((item) => (
                                <div key={item.id} class="card">
                                    {/* <img
                                        src={`${item.category?.image || "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg"}`}
                                        alt="Product Image"
                                    /> */}

                                     <img
                                      src={item.images}
                                        alt="Product Image"
                                    />
                                      

                                    <div class="card-content">
                                        <h3 class="card-title">{item.title}</h3>
                                        <p class="card-price">${item.price}</p>
                                        <p class="card-desc">
                                            {item.description}
                                            {/* {item.description===null ? item.description : "vishal"} */}
                                        </p>
                                    </div>
                                </div>
                            ))


                        }
                    </div>
                )}



            </div>
        </>
    )
}

export default HomeComponent