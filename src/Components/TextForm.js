import React, { useState } from 'react';

function TextForm(props) {
  const handleUpClick = () => {
    //console.log('UpperCase button was clicked');
    let newText = text.toUpperCase(text);
    //setText('You have clicked on handle up Click');
    setText(newText);
    props.showAlert('Converted to upper case', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase(text);
    setText(newText);
    props.showAlert('Converted to lower case', 'success');
  };

  const handleOnChange = (event) => {
    console.log('On Change');
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log('Copying the text');
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection.removeAllRanges();
    props.showAlert('Copied to clipboard', 'success');
  };

  const handleClear = () => {
    console.log('Clearing!!!');
    setText('');
    props.showAlert('Textbox Cleared!!!', 'success');
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra Spaces removed', 'success');
  };

  const [text, setText] = useState('Enter the text');

  return (
    <>
      <div
        className='container'
        style={{ color: props.mode === 'dark' ? 'light' : 'black' }}
      >
        <div className='mb-3'>
          <h2 className='mb-5'>{props.heading}</h2>
          <label htmlFor='myBox' className='form-label'></label>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'white' : '#efe5e5',
              // color: props.mode === 'dark' ? 'white' : '#1c548d',
              color: '#1c548d',
            }}
            id='myBox'
            rows='3'
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleLoClick}
        >
          Convert To LowerCase
        </button>

        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleCopy}
        >
          Copy
        </button>

        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>

        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div className='container'>
        <h5>Your text summary</h5>
        <p>
          {
            text.split(' ').filter((element) => {
              return element.length !== 0;
            }).length
          }{' '}
          words and {text.length} characters
        </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : 'Nothing to preview!!!'}</p>
      </div>
    </>
  );
}

export default TextForm;
