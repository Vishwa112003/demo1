import React from 'react'

export default function About(props) {
    // const [mystyle,setMyStyle] = useState(  {
    //     color:'black',
    //     backgroundColor:"white"
    // })
    let mystyle = {
      color: props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode ==='dark'?'rgb(117 140 163)':'white',
      border:'2px solid white',
      borderColor: props.mode === 'dark'?'white':'black'
    }
    
   
  return (
    <div className="container" style={mystyle}>
        <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item my-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
     <strong> Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
      </div>
    </div>
  </div>
  <div className="accordion-item my-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item my-2">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <button type="button" onClick={Dark} class="btn btn-dark my-3">{btntext}</button> */}
 </div>
  )
}
