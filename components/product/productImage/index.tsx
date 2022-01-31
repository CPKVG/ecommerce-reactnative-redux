import React from 'react'



//each new images needs to be configured here
const ProductImage = (image:any) => {
    const rootRoute = "./../../../"

        switch(image){
          case "White_t-shirt":
            return require(`${rootRoute}assests/img/White_t-shirt.png`)
          case "Black_t-shirt":
            return require(`${rootRoute}assests/img/Black_t-shirt.png`)
          case "RTX3080":
            return require(`${rootRoute}assests/img/RTX3080.png`)
          case "Laptop":
            return require(`${rootRoute}assests/img/Laptop.png`)
          case "Potatos":
            return require(`${rootRoute}assests/img/Potatos.png`) 
          case "Watties_Beanz":
            return require(`${rootRoute}assests/img/Watties_Beanz.png`)
          case "T34-85":
            return require(`${rootRoute}assests/img/T34-85.png`)
          case "Kv1":
            return require(`${rootRoute}assests/img/Kv1.png`)
          // default:
          //   return require("") // add image not found 
          //   break;

    }
}

export default ProductImage