import { Oval } from 'react-loader-spinner'
import './Loader.css'

const Loader = () => {

    return (
        <div className='loader'>
            <Oval color="#00BFFF" secondaryColor="#00BFFF" width={80} height={80} visible={true} />
        </div>
    )
}

export default Loader