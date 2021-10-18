import React from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';
import {SVGImagePlay} from './styles';
import play from '../../assets/images/mensagem/play.svg'
const Speech = ({text}) => {
   const {speak} = useSpeechSynthesis();
    return (
        <SVGImagePlay onClick={()=>speak({text})} src={play} alt="Ouvir mensagem"></SVGImagePlay>       
    )
 }
 
 export default Speech;