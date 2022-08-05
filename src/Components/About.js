import React,{useState} from 'react';

export default function About() {
    const [myBtn, setMyBtn] = useState("darkMode");
    const [myStyle, setMystyle] = useState({
        color:"black",
        backgroundColor:"white",
    });
    function toggleStyle(){
        if(myStyle.color==="white"){  
            setMystyle({
                color:"black",
                backgroundColor:"white",
            })
            setMyBtn("darkMode")
        }
        else{
            setMystyle({
                color:"white",
                backgroundColor:"black",
            })
            setMyBtn("lightMode")
        }
    }

    const [myBtn2, setMyBtn2] = useState("cuteMode");
    function toggleStyle2(){
        if(myStyle.color==="white"){
            setMystyle({
                color:"black",
                backgroundColor:"white",
            })
            setMyBtn2("cuteMode")
        }
        else{
            setMystyle({
                color:"white",
                backgroundColor:"pink",
            })
            setMyBtn2("lightMode")
        }
    }
    
  return (
    <div className='container' style={myStyle}>
        <h2>About us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    <div className="container my-3 mx-2">
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{myBtn}</button>
    <button type="button" onClick={toggleStyle2} className="btn btn-primary mx-2">{myBtn2}</button>
    </div>
    </div>
  );
}
