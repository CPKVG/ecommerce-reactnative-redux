import React from "react"
import { cleanup } from "@testing-library/react-native";
import ProductImage from ".";
import { render } from "../../../test-utils";


jest.useFakeTimers()

afterEach(cleanup)

describe('render productImage', () => {
    // const image = "./../../../assests/img/White_t-shirt.png"
    const rootRoute = "./../../../"
    //    const { get} = render(<ProductImage image = {image}/>)
        it("should return white t-shirt image route",() => {
            expect(ProductImage("White_t-shirt")).toBe(require(`${rootRoute}assests/img/White_t-shirt.png`))
        })
        it("should return Black_t-shirt image route",() => {
            expect(ProductImage("Black_t-shirt")).toBe(require(`${rootRoute}assests/img/Black_t-shirt.png`))
        })
        it("should return RTX3080 image route",() => {
            expect(ProductImage("RTX3080")).toBe(require(`${rootRoute}assests/img/RTX3080.png`))
        })
        it("should return Laptop image route",() => {
            expect(ProductImage("Laptop")).toBe(require(`${rootRoute}assests/img/Laptop.png`))
        })
        it("should return Potatos image route",() => {
            expect(ProductImage("Potatos")).toBe(require(`${rootRoute}assests/img/Potatos.png`))
        })
        it("should return Watties_Beanz image route",() => {
            expect(ProductImage("Watties_Beanz")).toBe(require(`${rootRoute}assests/img/Watties_Beanz.png`))
        })
        it("should return T34-85 image route",() => {
            expect(ProductImage("T34-85")).toBe(require(`${rootRoute}assests/img/T34-85.png`))
        })
        it("should return Kv1 image route",() => {
            expect(ProductImage("Kv1")).toBe(require(`${rootRoute}assests/img/Kv1.png`))
        })
      
})