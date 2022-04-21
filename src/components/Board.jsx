import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Board.css'

const Board = () => {
    const [movieContent, setMovieContent] = useState({
        title: '',
        content: ''
    })

    const [viewContent, setViewContent] = useState([]);
    
    const getValue = e => {
        const { name, value } = e.target;
        console.log(name, value);
        setMovieContent({
            ...movieContent,
            [name]: value
          })
        console.log(movieContent);
    };
    

  return (
    <div className="App">
        <h1>Movie Review</h1>
        <div className='list-container'>
            {viewContent.map(element => 
                <div>
                    <h2>{element.title}</h2>
                    <div>{element.content}</div>
                </div>
                    
            )}
        </div>
        <div className="form-wrapper">
            <input 
                className="title-input"
                type='text'
                placeholder='제목'
                onChange={getValue}
                name='title'
            />
        </div>

        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor 5!</p>"
            onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
                setMovieContent({
                    ...movieContent,
                    content: data
                })
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
                } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />

        <button 
            className="submit-button" 
            onClick={() => {
                setViewContent(viewContent.concat({...movieContent}));
            }}
        >
            입력
        </button>
    </div>
  )
}

export default Board;