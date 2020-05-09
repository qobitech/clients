import React from 'react';
import FontCss from './Font.module.css'

const One =({fontStyle,idea,fontClass,...props})=>{
    return(<h1 id={idea} className={`${FontCss.font_one} ${fontClass}`} style={fontStyle}>{props.children}</h1>)
}

const Two =({fontStyle,fontClass,...props})=>{
    return(<h2 className={`${FontCss.font_two} ${fontClass}`} style={fontStyle}>{props.children}</h2>)
}

const Three =({fontStyle,fontClass,...props})=>{
    return(<h3 className={`${FontCss.font_three} ${fontClass}`} style={fontStyle}>{props.children}</h3>)
}

const Four =({fontStyle,fontClass,...props})=>{
    return(<h4 className={`${FontCss.font_four} ${fontClass}`} style={fontStyle}>{props.children}</h4>)
}

const Five =({fontStyle,fontClass,...props})=>{
    return(<h5 className={`${FontCss.font_five} ${fontClass}`} style={fontStyle}>{props.children}</h5>)
}

const Six =({fontStyle,fontClass,...props})=>{
    return(<h6 className={`${FontCss.font_six} ${fontClass}`} style={fontStyle}>{props.children}</h6>)
}

const Para =({fontStyle,fontClass,...props})=>{
    return(<p className={`${FontCss.font_p} ${fontClass}`} style={fontStyle}>{props.children}</p>)
}

const Alpha =({fontStyle,ahref,fontClass,...props})=>{
    return(<a href={`${process.env.PUBLIC_URL}/${ahref}`} className={`${FontCss.font_alpha} ${fontClass}`} style={fontStyle}>{props.children}</a>)
}

export {
    One,Two,Three,Four,Five,Six,Para,Alpha
}