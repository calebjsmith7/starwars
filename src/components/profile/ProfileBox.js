import React from 'react';
import GetFeetFromCm from '../../util/GetFeetFromCm';
import GetPoundsFromKilos from '../../util/GetPoundsFromKilos';
import CapitalizeFirstLetter from '../../util/CapitalizeFirstLetter';
import { v4 as uuidv4 } from 'uuid';

function ProfileBox(props) {

    return (
        <>
            <div style={{ width: window.innerWidth > 500 ? "36%" : '81%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#1e2427', padding: '2%', paddingTop: 0 }}>
                <h2 style={{fontSize: 40, color: 'white', marginTop: 50, marginBottom: 10, paddingTop: 20}}>{props.charName}</h2>
                <h4 style={{color: 'white', fontFamily: 'Aurek-Besh', fontSize: 14, marginTop: 15}}>{props.charName}</h4>
                <h4 className='profileHeader' style={{ color: 'white', fontSize: 20, textDecorationLine: 'underline', marginTop: 50, marginBottom: 10 }}>About Me</h4>
                <p className='profileText' >Gender: {CapitalizeFirstLetter(props.char.gender)}</p>
                <p className='profileText' >Height: {GetFeetFromCm(props.charHeight)}</p>
                <p className='profileText' >Weight: {GetPoundsFromKilos(props.charMass)} lbs</p>
                <p className='profileText' >Hair Color: {CapitalizeFirstLetter(props.charHairColor)}</p>
                <p className='profileText' >Birthyear: {props.charBirthday}</p>
                <p className='profileText' >Species Info: {props.specInfo ? props.specInfo.name : "Loading..."}</p>
                <p className='profileText' >Species Average Lifespan: {props.specInfo ? props.specInfo.average_lifespan : "Loading..."}</p>
                <p className='profileText' >Films: </p>
                <div className='profileSection'>
                    {props.retData === props.char.films.length ?
                        props.films.map((film) => {
                            return (
                                <p className='italicText' key={uuidv4()}>- {film}</p>
                            )
                        })
                        :
                        <p className='profileText'>Loading...</p>
                    }
                </div>
                <p className='profileText'>Starships Flown: </p>
                {props.theStarShips.length > 0 ?
                    <div className='profileSection'>
                        {props.theStarShips.map((ship) => {
                            return (
                                <p className='italicText' key={uuidv4()}>- {ship}</p>
                            )
                        })}
                    </div>
                    :
                    <p className='profileText'>Not a Pilot</p>
                }
            </div>
        </>
    );
}

export default ProfileBox;
