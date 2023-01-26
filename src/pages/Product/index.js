import { useQuery } from '@apollo/client';
import React from 'react';
import { BASE_URL } from '../../Constants/constants';
import { Helmet } from "react-helmet";
import { getEntries } from '../../Constants/queryies';
import './product.css';


function Product(props) {
    const { loading, error, data } = useQuery(getEntries, {});
    const { entries = [] } = data && data.data || {}
    let productDetails = entries.find((e) => e._id == props.match.params.product_id)
    const { thumbnail = {}, title = '', metadescription = '', _id } = productDetails || {}
    const { path = '' } = thumbnail

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={metadescription || 'Description not there'} />
            </Helmet>
            {
                loading ?
                    <div className='loader'>
                        <img className='loader-img' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' />
                    </div>
                    :
                    <div className="cards_item product-cards_item">
                        <div className="card product_card">
                            <div className="card_image"><img className='card_img_tag' src={BASE_URL + path} /></div>
                            <div className="card_content">
                                <h2 className="card_title">{title}</h2>
                                <p className="card_text">{metadescription}</p>
                            </div>
                        </div>
                    </div>
            }

        </>
    );
}

export default (Product);
