import CheckoutTypes from "./checkout.types";


export const submitCart = () => async (dispatch:any) => {
    //button action fromm checkoutUI
    dispatch({
        type: CheckoutTypes.SUBMIT_ORDER,
        payload:true
        })
}

export const inputValidation = (data:any) => async (dispatch:any)=> {
    //***********REPLACE WITH SERVER SIDE RES,REQ***********
    //***********DEV/TESTING PURUPOSE!, DO NOT USE THIS FOR PRODUCTION BUILD!!*************

    //**********FEELING CUTE MIGHT REPLCE THIS WITH NODEJS ***************/

    // console.log(data)

    // const data = {
    //     "Card number":"4987654321098769",
    //     "CVC code":"100",
    //     "Card holder name":"John Doe",
    //     "Expire date":"0524",
    //     "First name":"Joe",
    //     "Last name":"Doe",
    //     "City":"Wellington",
    //     "Street Address":"Foo Street",
    //     "PostCode":"0912",
    //     "Email":"JoeMama@gmail.com",
    //     "Phone":"1234567890"
    // }


    let valid = false
    const validObjArr = [ 
        {name :"Card number",value:"",valid:false,maxlength:"16",minlength:"16",isNum:true},
        {name :"CVC code",value:"",valid:false,maxlength:"3",minlength:"3",isNum:true},
        {name :"Card holder name",value:"",valid:false,maxlength:"30",minlength:"1",isNum:false},
        {name :"Expire date",value:"",valid:false,maxlength:"4",minlength:"4",isNum:true},
        {name :"Last name",value:"",valid:false,maxlength:"30",minlength:"1",isNum:false},
        {name :"Street Address",value:"",valid:false,maxlength:"20",minlength:"1",isNum:false},
        {name :"PostCode",value:"",valid:false,maxlength:"4",minlength:"4",isNum:true},
        {name :"Email",value:"",valid:false,maxlength:"20",minlength:"1",isNum:false},
        {name :"Phone",value:"",valid:false,maxlength:"10",minlength:"1",isNum:true},
    ]
    // console.log(validObjArr)
    function valcondition(dataElement:any,isNum:any,maxLength:any,minLength:any){
        let status: any;
        if(dataElement !== undefined){
            if(isNum){
                status = dataElement.length <=  maxLength && dataElement.length >= minLength ? true : false
            }else{
                status = isNaN(dataElement) && dataElement.length <=  maxLength && dataElement.length >= minLength ? true : false 
            }
        }
        return status
    }

        Object.keys(validObjArr).forEach((x:any)=> {
            Object.keys(data).some(e => e === validObjArr[x].name) ? validObjArr[x].value = data[validObjArr[x].name]: ""

            validObjArr[x].valid = valcondition(
                validObjArr[x].value,
                validObjArr[x].isNum,
                validObjArr[x].maxlength,
                validObjArr[x].minlength
            )
    })
    
    let exists;
    if(validObjArr.some(validObjArr => validObjArr.valid == false)){
        valid = false
    }else{
        valid = true
    }

    dispatch({
        type: CheckoutTypes.VALID_INPUT,
        payload:valid
    })
}

// export const toggleSubmitCardBtn = () => async (dispatch:any) => {
//     //action for checkoutBtn to appear
//     //data validation to check for all inputs to be filled
//     dispatch({
//         type: CheckoutTypes.TOGGLE_BTN,
//         // payload: shoppingCart   
//         payload:true
//         })
// }


const inputSubmit = () => {

}