import React from "react";
import "../conponents_css/Flashsale.css";
import Books_2 from '../IMG/books-2.jpg';
import Books_1 from '../IMG/books-1.jpg';
import Books_3 from '../IMG/books-3.jpg';
import Books_4 from '../IMG/books-4.jpg';


function Flashsale() {
  return (
    <div className="flash-sala">
      <div className="recomment">
        <h2>หนังสือแนะนำ</h2>
        <div className="recomment-crad">
          <div className="img">
            <img src={Books_1} alt="IMG" />
          </div>
          <div className="text">
            <p>Spring books</p>
            <p>ราคา 299.-</p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="recomment-crad">
          <div className="img">
            <img src={Books_2} alt="" />
          </div>
          <div className="text">
            <p>Spring books</p>
            <p>ราคา 299.-</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>

    {/* flash-sell */}

      <div className="flash">
        <div className="time-sale">Flash 17:02:01</div>
        <div className="books-sale">

          <div className="crad-books-sale">
            <div className="img">
              <img src={Books_2} alt="" />
            </div>
            <p>Spring books</p>
            <div className="text">
              <p>ราคา 299.-</p>
              <button>Buy Now</button>
            </div>
          </div>

          <div className="crad-books-sale">
            <div className="img">
              <img src={Books_3} alt="" />
            </div>
            <p>Spring books</p>
            <div className="text">
              <p>ราคา 299.-</p>
              <button>Buy Now</button>
            </div>
          </div>

          <div className="crad-books-sale">
            <div className="img">
              <img src={Books_4} alt="" />
            </div>
            <p>Spring books</p>
            <div className="text">
              <p>ราคา 299.-</p>
              <button>Buy Now</button>
            </div>
          </div>

          <div className="crad-books-sale">
            <div className="img">
              <img src={Books_2} alt="" />
            </div>
            <p>Spring books</p>
            <div className="text">
              <p>ราคา 299.-</p>
              <button>Buy Now</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Flashsale;
