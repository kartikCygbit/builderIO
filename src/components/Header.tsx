import './styles/HeaderStyles.css';
type HeaderProps = {
  headerImg: string;
  headerImgAlt?: string;
  buttonUrl: string;
}

const  Header = (props: HeaderProps) => {
  return(
    <div className='headerContainer'>
      <img className='headerImg'
        src={props.headerImg}
        alt={props.headerImgAlt ?? 'LOGO'}
      />
      <a className='headerBtn' href={props.buttonUrl}>
        <p className='headerBtnText'>download</p>
      </a>
    </div>
  )
}

export default Header;