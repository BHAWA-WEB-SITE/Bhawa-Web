import React from 'react'
import './sponser.css'
import img from '../../assets/1_w7fSHgKimriL-ryZJ52Uig.png'

function Sponser() {
    return (
        <>

            <div className='Sponser-container m-3'>

                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod adipisci sed optio assumenda. Et ullam officia recusandae ad ipsum possimus pariatur facilis, laudantium, ratione, sequi officiis deleniti perspiciatis at omnis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum assumenda cum ullam amet, quia rem porro inventore necessitatibus mollitia, sint, ducimus laudantium. Fugit fugiat voluptatibus quis aliquam dolor atque provident.
                    </p>
                </div>

                <img src={img} alt="..." className='image-sponser' />

            </div>


        </>
    )
}

export default Sponser