import React from 'react';
import GetFeetFromCm from '../util/GetFeetFromCm';
import GetPoundsFromKilos from '../util/GetPoundsFromKilos';
import CapitalizeFirstLetter from '../util/CapitalizeFirstLetter';
import { v4 as uuidv4 } from 'uuid';
import Loading from './Loading';

function ProfileBox(props) {

    return (
        <>
            <div style={{ width: '26%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#1e2427', padding: '2%', paddingTop: 0 }}>
                <h2 style={{ color: 'white', fontSize: 40, marginTop: 50, marginBottom: 10 }}>{props.charName}</h2>
                <h4 style={{ color: 'white', fontFamily: 'Aurek-Besh', fontSize: 14, marginTop: 15  }}>{props.charName}</h4>
                <h4 style={{ color: 'white', fontSize: 20, textDecorationLine: 'underline', marginTop: 50, marginBottom: 10 }}>About Me</h4>
                <p style={{ color: 'white' }}>Gender: {CapitalizeFirstLetter(props.char.gender)}</p>
                <p style={{ color: 'white' }}>Height: {GetFeetFromCm(props.charHeight)}</p>
                <p style={{ color: 'white' }}>Weight: {GetPoundsFromKilos(props.charMass)} lbs</p>
                <p style={{ color: 'white' }}>Hair Color: {CapitalizeFirstLetter(props.charHairColor)}</p>
                <p style={{ color: 'white' }}>Birthyear: {props.charBirthday}</p>
                <p style={{ color: 'white' }}>Species Info: {props.specInfo ? props.specInfo.name : "Loading..."}</p>
                <p style={{ color: 'white' }}>Species Average Lifespan: {props.specInfo ? props.specInfo.average_lifespan : "Loading..."}</p>
                <p style={{ color: 'white' }}>Films: </p>
                <div style={{ textAlign: 'left', width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
                    {props.retData === props.char.films.length ?
                        props.films.map((film) => {
                            return (
                                <p style={{ color: 'white', fontStyle: 'italic' }} key={uuidv4()}>- {film}</p>
                            )
                        })
                        :
                        <Loading />
                    }
                </div>
                <p style={{ color: 'white' }}>Starships Flown: </p>
                {props.theStarShips.length > 0 ?
                    <div style={{ textAlign: 'left', width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
                        {props.theStarShips.map((ship) => {
                            return (
                                <p style={{ color: 'white', fontStyle: 'italic' }} key={uuidv4()}>- {ship}</p>
                            )
                        })}
                    </div>
                    :
                    <p style={{ color: 'white' }}>Not a Pilot</p>
                }
            </div>
        </>
    );
}

export default ProfileBox;
