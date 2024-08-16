import { useParams } from "react-router-dom"

function DetailsPage() {
  const {id}  = useParams();
  console.log(id)
  return (
    <div>{id}</div>
  )
}

export default DetailsPage