// import React, { useState } from 'react';

function About(props) {
  // let myStyle1 = {
  //   color: 'Black',
  //   backgroundColor: 'Cyan',
  // };

  // const [myStyle, setmyStyle] = useState({
  //   color: 'White',
  //   backgroundColor: 'Black',
  // });

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#041d42',
    backgroundColor: props.mode === 'dark' ? '#041d42' : 'white',
  };
  // const [buttonText, setbuttonText] = useState('Enable Light Mode');

  // const toggleStyle = () => {
  //   if (myStyle.color === 'white') {
  //     setmyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //       border: '1px solid black',
  //     });
  //     setbuttonText('Enable Dark Mode');
  //   } else {
  //     setmyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white',
  //     });
  //     setbuttonText('Enable Light Mode');
  //   }
  // };

  return (
    <div className='container' style={myStyle}>
      <div className='accordion' id='accordionExample'>
        <h2>About Us</h2>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              style={myStyle}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              <strong>Analyse the text</strong>
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              TextUtils gives you the way to analyse your text quickly and
              efficiently. Be it word count, Character count, Extra space
              removal
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              style={myStyle}
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character count and word count statistics for a given text.
              TextUtils reports the number of characters and words. Thus iit is
              suitable for writinng text with word/ characters limit
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              style={myStyle}
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              This word counter software works in any web browser such as
              Chrome, Microsoft Edge, Safari, Opera. It suits to count
              characters in facebook, blog, books, excel document, pdf
              document,essays, etc
            </div>
          </div>
        </div>
      </div>
      <div className='container my-3'>
        {/* <button
          type='button'
          onClick={toggleStyle}
          className='btn btn-primary'
          style={myStyle}
        >
          {buttonText}
        </button> */}
      </div>
    </div>
  );
}

export default About;
