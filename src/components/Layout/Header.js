import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import soyaChaapImage from '../../assets/soyaChaap.jpg';
import TawapaneerImage from '../../assets/Tawa_paneer.jpg';
import TikkaImage from '../../assets/TikkaImage.jpg';
import Tawa_chaap from '../../assets/TawachaapwithrumaliRoti.jpg';
import classes from './Header.module.css';
import MalaiSoya_chaap from '../../assets/Malai_Soya_Chaap_Tikka.webp';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> Recipe Book!!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={TikkaImage} alt='A table full of delicious food!' />
      </div>
      <div className={classes['side-image']}>
        <img src={soyaChaapImage} alt='A table full of  food!' /> 
        </div>
      <div className={classes['side-image']}>
        <img src={TawapaneerImage} alt='A table full of  food!' /></div>
        <div className={classes['side-image']}>
        <img src={MalaiSoya_chaap} alt='A table full of  food!' /></div>
      
      <div className={classes['side-image']}>
        <img src={Tawa_chaap} alt='A table full of  food!' /> </div>
    </Fragment>

    
  );
};


export default Header;
