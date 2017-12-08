import React, {Component} from 'react';

export default function Loader({width='35', ...rest}){
  const useTag = `
    <defs>
      <path id="a" stroke="#6c6c6c" stroke-width="11" d="M60 7v20" stroke-linecap="round"/>
    </defs>
    <use xlink:href="#a" opacity=".27"/>
    <use xlink:href="#a" opacity=".27" transform="rotate(30 60 60)"/>
    <use xlink:href="#a" opacity=".27" transform="rotate(60 60 60)"/>
    <use xlink:href="#a" opacity=".27" transform="rotate(90 60 60)"/>
    <use xlink:href="#a" opacity=".27" transform="rotate(120 60 60)"/>
    <use xlink:href="#a" opacity=".27" transform="rotate(150 60 60)"/>
    <use xlink:href="#a" opacity=".37" transform="rotate(180 60 60)"/>
    <use xlink:href="#a" opacity=".46" transform="rotate(210 60 60)"/>
    <use xlink:href="#a" opacity=".56" transform="rotate(240 60 60)"/>
    <use xlink:href="#a" opacity=".66" transform="rotate(270 60 60)"/>
    <use xlink:href="#a" opacity=".75" transform="rotate(300 60 60)"/>
    <use xlink:href="#a" opacity=".85" transform="rotate(330 60 60)"/>
  `
  return (
    <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" dangerouslySetInnerHTML={{__html: useTag}}/>
  )
}
