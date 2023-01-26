import { React } from 'react';
import { BASE_URL } from '../../Constants/constants';
import './card.css';

export default function Card(props) {
    const {thumbnail={},title='',metadescription='',_id} = props.cardData || {}
    const {path=''} = thumbnail

    const handleReadMore = () => {
        props.history.push('/product/'+_id)
    }

    return (
       
            <div className="card">
                <div className="card_image"><img src={BASE_URL+path}  /></div>
                <div className="card_content">
                    <h2 className="card_title">{title}</h2>
                    <p className="card_text">{metadescription}</p>
                    <button onClick={handleReadMore} className="btn card_btn">Read More</button>
                </div>
            </div>
    );
}

