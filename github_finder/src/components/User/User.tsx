import styles from "./User.module.css"
import { Link } from "react-router-dom"
import { MdLocationPin } from "react-icons/md"
import type { UserProps } from "../../types/user"

const User = ({ login, avatar_url, followers, following, location }: UserProps) => {
  return (
    <div className={styles.user_card}>
      <img src={avatar_url} alt={`${login}'s avatar`} />
      <h2>{login}</h2>
      <p className={styles.location}>
        <MdLocationPin /> <span>{location ? location : 'Unknown'}</span>
      </p>
      <div className={styles.stats}>
        <div>
          <p>Followers:</p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p className={styles.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>See Best Repositories</Link>
    </div>
  )
}

export default User;
