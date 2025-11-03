import React from 'react'
import useFetch from '../Hooks/useFetch'
import '../assets/style/homeComponent.css'
import Productimage from '../assets/images/productimage.jpeg'

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
                                        src={item?.images?.[0] || Productimage}
                                        alt="Product Image"
                                    /> */}

                                    {/* cors error  -> if not allowd to show the data */}


                                    <img
                                        src={item?.images?.[0]}
                                        alt={item?.title || "Product Image"}
                                        onError={(e) => {
                                            e.target.onerror = null; // prevent infinite loop
                                            e.target.src = Productimage;
                                        }}

                                    />


                                    <div class="card-content">
                                        <h3 class="card-title">{item.title}</h3>
                                        <p class="card-price">${item.price}</p>
                                        <p class="card-desc">
                                            {item.description.slice(0, 99)}
                                            {item.description.length >= 100 && "..."}
                                            {/* {item.description===null ? item.description : "vishal"} */}
                                        </p>
                                    </div>+
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

