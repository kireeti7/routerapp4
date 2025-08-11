import { useParams } from "react-router-dom"

const UserDetails = () => {
  const {userId} = useParams();
  return (
    <div>
      Deatils of Users {userId}
    </div>
  )
}

export default UserDetails
