import React from 'react';
import { Link } from 'react-router-dom';
import FirstAndLastNames from '../util/FirstAndLastNames';
import { v4 as uuidv4 } from 'uuid';

function SearchResults(props) {

    return (
        <>
            <div style={{ display: props.searchEntry ? 'block' : 'none', backgroundColor: 'white', width: props.width, marginLeft: 'auto', marginRight: 'auto', marginTop: '-1%', height: 'auto', maxHeight: 300, overflowY: 'scroll' }}>
                {props.characterList.map((char) => {
                    let charName = char.name.toUpperCase();
                    let nameObject = FirstAndLastNames(charName);
                    return (
                        charName.match(props.searchEntry.toUpperCase()) ?
                            <Link to={"/profile/" + nameObject.first + nameObject.last} style={{ textDecoration: 'none' }} key={uuidv4()}>
                                <div onClick={() => console.log(char.name + ' clicked')} style={{ height: 40, backgroundColor: 'white', textAlign: 'center' }}>
                                    <h5 style={{ color: 'black' }}>{char.name}</h5>
                                    <hr style={{ border: 'fafafa' }} />
                                </div>
                            </Link>
                            : null
                    )
                })}
            </div>
        </>
    );
}

export default SearchResults;
