import React from 'react'

function CopyRight() {
  return (
    <p class="copyright">© {getYear()} Daiss Academy. All Rights Reserved.</p>
  )
}

function getYear() {
  return new Date().getFullYear();
}

export default CopyRight
