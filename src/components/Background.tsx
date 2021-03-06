import React, {CSSProperties} from 'react';
import background1 from '../img/background/background1.png'
import background2 from '../img/background/background2.png'
import background3 from '../img/background/background3.png'
import background4 from '../img/background/background4.png'
import background5 from '../img/background/background5.png'
import background6 from '../img/background/background6.png'
import background7 from '../img/background/background7.png'
import field from "../img/field.png";

const backgroundImg = [background1, background2, background3, background4, background5, background6, background7]

const style = {
    bottom: 30,
    width: 90,
    height: 80
}

export const Field = React.memo(() => {
    const style: CSSProperties = {
        zIndex: 5,
        position: 'absolute',
        bottom: 0,
    }
    return (<img src={field} style={style} alt="" />)
})

const Background = React.memo(({left}: {left:number}) => {
    const {bottom, width, height} = style;
    const objetRandom = Math.round(Math.random() * (backgroundImg.length-1));
    const avatar = backgroundImg[objetRandom];
    return <img alt={'background'} className='background' src={avatar} style={{bottom, width, height,left, position:'absolute'}} />
})

export default Background