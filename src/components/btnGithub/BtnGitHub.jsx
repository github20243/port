import React from 'react'
import "./style.css"

const BtnGitHub = ({link}) => {
  return (
    <div>
      <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
              <img src="src/img/icons/gitHub-black.svg" alt="" />
              GitHub repo
            </a>
    </div>
  )
}

export default BtnGitHub