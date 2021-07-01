import { Div } from './styles';

import foto4 from '../../assets/foto4.png'


function slide() {
    return (
        <>
        <Div>
            <img src={foto4} alt="" />
            <div className="promo">
                <h4>BEST COLLECTION</h4>
                <h1>Limited time<br /> offer Hurry up!</h1>
                <button>SHOP NOW</button>
            </div>

        </Div>
        </>
    );
}

export default slide;