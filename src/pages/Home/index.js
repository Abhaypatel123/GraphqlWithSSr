
import { React } from 'react';
import './home.css';
import { getEntries, getEntrieDetails } from '../../Constants/queryies';
import { gql, useQuery } from '@apollo/client';
import Card from '../../Components/Card';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';


function Home(props) {
    const { loading, error, data } = useQuery(getEntries, {});
    const { entries = [] } = data && data.data || {}

    return (
        <div>
            {
                loading ?
                    <div className='loader'>
                        <img className='loader-img' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' />
                    </div>
                    :
                    <div className="main">
                        <ul className="cards">
                            {entries.map((item, index) => {
                                return (
                                    <li className="cards_item" key={index}>
                                        <Card
                                            history={props.history}
                                            cardData={item}
                                            index={index}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
            }
        </div>
    );
}

export default (Home);
