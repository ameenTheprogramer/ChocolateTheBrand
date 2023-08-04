import React, { useEffect, useState } from 'react'
import './Container.css'
import choco2 from '../../images/choco2.jpeg'
import choco1 from '../../images/choco1.jpeg'

import firebase from 'firebase/compat/app';
import { firebaseConfig } from '../../config/Config'



const Firebase = firebase.initializeApp(firebaseConfig);




function Container() {
  var db = Firebase.firestore()
  const [products, setProducts] = useState([])






  useEffect(() => {
    db.collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }

      })
      // console.log(allPost);
      setProducts(allPost)
    }).catch((error) => {
      // alert('log in for the best experience.  ' + error.message)
    })
  }, [])






  return (
    <div>
      <div className="h100vh container1">
        <img className='img' src={choco2} alt="" />

        <div className='gradient1' ></div>

        <div className='brand'>

          <h1 className='brandname' >Chocolate The Brand</h1>
          <p className='branddiscription'>discription blah blah blah.</p>
        </div>
      </div>
      <div className="h00vh ">
        <h1 className='producthead' >Products <i class="fa-solid fa-angle-right" style={{ position: 'relative', top: '2px' }}></i> </h1>
        <div className="products">


          <div className='product' >
            <img className='productimg' src={choco1} alt="" style={{ height: '60%' }} />
            <p className='setp set2'>something</p>
          </div>


          {products.map(product => {
            return (
              <div className='product' >
                <img className='productimg' src={product.url} alt="" />
                <p className='setp set2'>{product.productName}</p>
              </div>
            )
          })}




          {/* <div className='product' >

            </div>                                                                                                                                                                     */}



        </div>
        <div className="products not1st reverse">

          {/* {products.map(product=>{
              return(
              <div className='product' >
                <img className='productimg' src={product.url} alt="" />
                <p className='setp set2'>{product.productName}</p>
              </div>
            )
            })} */}

        </div>

        <div className="block needtoscroll">
          <div className='headline'>
            <h2>Cool Facts about Chocolate</h2>
          </div>
          <p className='setp'>
            {/* <strong className='stro'></strong> */}
            <strong className='stro'>&#8226; Chocolate and Cacao Origins</strong>
            <br />The cacao tree, scientifically known as Theobroma cacao, is native to the tropical regions of the Americas. The word "Theobroma" actually means "food of the gods" in Greek.
            <br />
            <br /><strong className='stro'>&#8226; Oldest Chocolate Recipe</strong><br /> The oldest known chocolate recipe comes from ancient Mayan civilization. It dates back to around 2,000 years ago and involves grinding cacao beans with water and spices to create a bitter beverage.
            <br />
            <br /><strong className='stro'>&#8226; Chocolate as Currency</strong><br /> During the height of the Aztec civilization, cacao beans were used as currency. The Aztecs believed that cacao was a sacred gift from the gods and used it as a form of currency for trade.
            <br />
            <br /><strong className='stro'>&#8226; Chocolate and Valentine's Day</strong><br /> The tradition of giving chocolate on Valentine's Day can be traced back to the 19th century. Richard Cadbury, a British chocolatier, introduced beautifully decorated chocolate boxes as a way to package and sell his chocolates for Valentine's Day.
            <br />
            <br /><strong className='stro'>&#8226; Health Benefits of Dark Chocolate</strong><br /> Dark chocolate, with a high percentage of cocoa solids, contains flavonoids and antioxidants that can provide several health benefits. It may help improve heart health, lower blood pressure, and boost mood.
            <br />
            <br /><strong className='stro'>&#8226; Chocolate and Endorphins</strong><br /> Eating chocolate can trigger the release of endorphins in the brain. Endorphins are chemicals that promote feelings of pleasure and happiness, which is why chocolate is often associated with a positive mood.
            <br />
            <br /><strong className='stro'>&#8226; World Chocolate Day</strong><br /> World Chocolate Day is celebrated on July 7th each year. This date is believed to commemorate the day when chocolate was first introduced to Europe in the 16th century.
            <br />
            <br /><strong className='stro'>&#8226; Chocolate in Space</strong><br /> Astronauts on space missions have been known to take chocolate into space. However, due to the lack of refrigeration, they usually opt for chocolate-covered treats or specially processed chocolate that doesn't melt easily.
            <br />
            <br /><strong className='stro'>&#8226; Chocolate Consumption</strong><br /> Switzerland holds the title for the highest chocolate consumption per capita in the world. On average, an individual in Switzerland consumes around 8.8 kilograms (19.4 pounds) of chocolate per year.
            <br />
            <br /><strong className='stro'>&#8226; Largest Chocolate Bar</strong><br /> The largest chocolate bar ever made weighed approximately 5,792 kilograms (12,770 pounds). It was created in Armenia in 2010 and measured 5.7 meters (18.7 feet) long.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>

        <div>
        </div>

      </div>
    </div>
  )
}

export default Container
