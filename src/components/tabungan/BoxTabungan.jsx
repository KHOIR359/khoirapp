import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/components/boxTabungan.css';

const BoxTabungan = () => {
  return (
    <div id="boxTabungan">
      <div>
        <h2>Cash</h2>
        <h3>Rp. 200.000,00</h3>
      </div>
      <div className="boxFooter">
        <a href="#">Detail</a>
      </div>
    </div>
  )
}

export default BoxTabungan