import React from "react";
import { useCart } from "react-use-cart";
// import data3 from "../assets/data/data3";
import img from "../assets/img/empty.png";


const Cart = () => {
    const { items, updateItemQuantity, removeItem, emptyCart, isEmpty, cartTotal } =
      useCart();
//   const {
//     values,
//     updatevalueQuantity,
    // removevalue,
//     isEmpty,
//     cartTotal,
//     emptyCart,
//   } = useCart();
// //   if (isEmpty)
//     // return (
//     //   <div className="d-flex align-values center justify-content-center">
//         {/* <img
//           src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
//           alt=""
//         /> */}
//       {/* </div>
//     ); */}
//  return (
//    <div className="d-flex align-items center justify-content-center">
//      <img
//        src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
//        alt=""
//      />
//    </div>
//  );
// if( isEmpty) 
// return (
  //    <div className="d-flex align-items center justify-content-center">
  // <img
  //   src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.organicamrit.com%2Fcart-empty&psig=AOvVaw19dgH7dLj4pzbw5QiUyz0B&ust=1678518794878000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjhq_bn0P0CFQAAAAAdAAAAABAE"
  //   alt="err"/>
  // <div/>
   if( isEmpty)

   return
  <div className="d-flex align-items center justify-content-center">
    <img src={img} alt="err" />
  </div>;


  return (
    <>
      <div className="container">
        <div className="box-cart">
          <table className="table  table-danger">
            <thead>
              <tr>
                {/* <th scope="col"></th> */}
                <th scope="col">photo</th>
                <th scope="col">title</th>
                <th scope="col">price</th>
                <th scope="col">quantity</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>

            <tbody>
              {items.map((value, i) => {
                return (
                  <tr>
                    {/* <th scope="row">{i + 1}</th> */}
                    <td>
                      <img width={50} src={value.img} alt={value.title} />
                    </td>
                    <td>{value.title}</td>
                    <td>{value.price}</td>
                    {/* <td>{(value.price * value.quantity).toFixed(1)}$</td> */}
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          updateItemQuantity(value.id, value.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="mx-3">{value.quantity}</span>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          updateItemQuantity(value.id, value.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn  btn-danger"
                        onClick={() => removeItem(value.id)}
                      >
                        Del
                        <i class="bi bi-archive"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
 
      <h3 className="">
        Total Price:
   {cartTotal.toFixed(1)}$
      </h3>
      <button
        className="mt-3 btn btn-danger"
        onClick={() => {
          emptyCart();
        }}
      >
        Empty Cart
      </button>
      {/* <div className="container">
        <div className="totalbox">
          <table>
            <thead>
              <tr>
                <th scope="col">photo</th>
                <th scope="col">title</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="car d-flex   justify-content-center">
        <div className="box d-flex justify-content-between align-items-center mx-5">
          <div className="price"> Total price:
          <br></br>
          {cartTotal.toFixed(1)}$</div>
          <div className="empty">
            <button>Empty cart</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Cart;

