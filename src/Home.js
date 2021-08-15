import React from 'react';
import Itemcard from "./ItemCard";
import data from "./data";
import logo from './img/logo.png';

const Home = () => {
    return (
        <>
          <h1 className="text-center mt-3">
          <img src={logo} style={{height: '80px'}}/>
              FoodApp
              </h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index)=>{
                        return(
                            <Itemcard 
                                img={item.img} 
                                title={item.title} 
                                desc={item.size} 
                                price={item.price} 
                                item={item} 
                                key={index} 
                            />
                        )
                    })}
                
                </div>
            </section>
        </>
    );
};

export default Home;