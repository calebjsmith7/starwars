import React from 'react';

function SearchResults(props) {

    return (
        <>
            <div style={{ display: props.searchEntry ? 'block' : 'none', backgroundColor: 'white', width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '-2%', height: 'auto', maxHeight: 300, overflowY: 'scroll' }}>
                {props.characterList.map((char) => {
                    let charName = char.name.toUpperCase();
                    return (

                        charName.match(props.searchEntry.toUpperCase()) ?
                            <a href={"/profile/" + char.name} style={{ textDecoration: 'none' }}>
                                <div onClick={() => console.log(char.name + ' clicked')} style={{ height: 40, backgroundColor: 'white', textAlign: 'center' }}>
                                    <h5 style={{ color: 'black' }}>{char.name}</h5>
                                    <hr style={{ border: 'fafafa' }} />
                                </div>
                            </a>
                            : null
                    )
                })}
            </div>
        </>
    );
}

export default SearchResults;
