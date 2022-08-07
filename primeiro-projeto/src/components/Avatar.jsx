import styles from './Avatar.module.css';

const Avatar = ({hasBorder, src}) => {
  return (
    <img
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
  )
}
export default Avatar