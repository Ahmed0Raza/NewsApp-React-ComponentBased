import React, { Component } from 'react';
import loading from './loading.gif';

export class Loading extends Component {
  render() {
    return (
      <>
        <style>
          {`
            .loading-image {
              width: 30px;
              height:30px;
            }
          `}
        </style>
        <div className='text-center my-3'>
          <img src={loading} alt="loading" className="loading-image" />
        </div>
      </>
    );
  }
}

export default Loading;