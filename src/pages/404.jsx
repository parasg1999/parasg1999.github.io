/** @jsx jsx */
import { jsx } from "theme-ui"
import "./404.scss"

const FourOhFourPage = () => {
  const redirect = () => {
    window.location.replace('/');
  }

  return (
    <div role="button" className="fourOhFour">
      404
      <br />
      <button onClick={redirect}>Go Home</button>
    </div>
  )
}

export default FourOhFourPage;