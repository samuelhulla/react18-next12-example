import { default as ButtonClient } from '../../components/Button.client'
import { default as ButtonServer } from '../../components/Button.server'

const ServerComponent = () => {
  <>
    <ButtonServer>server</ButtonServer>
    <ButtonClient>client</ButtonClient>
  </>
}

export default ServerComponent