import React from "react"

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import CheckoutTypes from "./checkout.types";
import { inputValidation } from "./checkout.action";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action creators for checkout.Action', () => {

    const data = {
        "Card number":"4987654321098769",
        "CVC code":"100",
        "Card holder name":"John Doe",
        "Expire date":"0524",
        "First name":"Joe",
        "Last name":"Doe",
        "City":"Wellington",
        "Street Address":"Foo Street",
        "PostCode":"0912",
        "Email":"JoeMama@gmail.com",
        "Phone":"1234567890"
    }

    const faultyData = {
        "Card number":"213123",
        "CVC code":"10www0",
        "Card holder name":"John qweqeq1231213123??>?>:LDoe",
        "Expire date":"",
        "First name":"",
        "Last name":"",
        "City":"Wellington",
        "Street Address":"Foo Ssadsatreet",
        "PostCode":"0912aaaaaa",
        "Email":"JoeMama@gadasdad1231231231mail.com",
        "Phone":"1234567sda890"
    }


    it('Creates VALID_INPUT action', () => {
        //TODO
    })



    it('Creates VALID_INPUT action,inputValidation should return valid = true ', () => {
        const store:any = mockStore()
        let valid = true
        const action = [{ type: CheckoutTypes.VALID_INPUT, payload: valid }];
        // Return the promise
        return store.dispatch(inputValidation(data))
          .then(() => {
            const actions = store.getActions()
            expect(actions).toEqual(action)
          })
    })

    it('Creates VALID_INPUT action,inputValidation should return valid = false ', () => {
        const store:any = mockStore()
        let valid = false
        const action = [{ type: CheckoutTypes.VALID_INPUT, payload: valid }];
        // Return the promise
        return store.dispatch(inputValidation(faultyData))
          .then(() => {
            const actions = store.getActions()
            expect(actions).toEqual(action)
          })
    })
})