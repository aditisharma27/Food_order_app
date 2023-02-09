import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import soyaChaapImage from '../../assets/soyaChaap.webp';
import TawapaneerImage from '../../assets/Tawa_paneer.webp';
import TikkaImage from '../../assets/TikkaImage.jpg';
import Tawa_chaap from '../../assets/Tawa_chaap.webp';
import classes from './Header.module.css';

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
        <img src={soyaChaapImage} alt='A table full of  food!' /></div>
      <div className={classes['side-image']}>
        <img src={TawapaneerImage} alt='A table full of  food!' /></div>
      <div className={classes['right-image']}>
        <img src={Tawa_chaap} alt='A table full of  food!' /></div>
      
    </Fragment>
  );
};

export default Header;
