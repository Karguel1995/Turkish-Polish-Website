import salt from '../../../../images/Spices&HerbsImages/salt.jpg'
import pepper from '../../../../images/Spices&HerbsImages/pepper.jpg'
import aloeVera from '../../../../images/Spices&HerbsImages/aloeVera.jpg'
import bayLeaf from '../../../../images/Spices&HerbsImages/bayLeaf.jpg'
import chamomile from '../../../../images/Spices&HerbsImages/chamomile.jpg'
import chive from '../../../../images/Spices&HerbsImages/chive.jpg'
import cloves from '../../../../images/Spices&HerbsImages/cloves.jpg'
import cinnamon from '../../../../images/Spices&HerbsImages/cinnamon.jpg'
import dill from '../../../../images/Spices&HerbsImages/dill.jpg'
import garlic from '../../../../images/Spices&HerbsImages/garlic.jpg'
import ginger from '../../../../images/Spices&HerbsImages/ginger.jpg'
import mint from '../../../../images/Spices&HerbsImages/mint.jpg'
import oregano from '../../../../images/Spices&HerbsImages/oregano.jpg'
import paprika from '../../../../images/Spices&HerbsImages/paprika.jpg'
import parsley from '../../../../images/Spices&HerbsImages/parsley.jpg'
import poppySeeds from '../../../../images/Spices&HerbsImages/poppySeeds.jpg'
import powderedSugar from '../../../../images/Spices&HerbsImages/powderedSugar.jpg'
import sesame from '../../../../images/Spices&HerbsImages/sesame.jpg'
import vanilla from '../../../../images/Spices&HerbsImages/vanilla.jpg'
import sugar from '../../../../images/BasicFoodImages/sugar.jpg'
import basil from '../../../../images/BasicFoodImages/herbs.jpg'


import turkishFlag from '../../../../images/turkey.png'
import polishFlag from '../../../../images/poland.png'
import React, { useState } from 'react'


function SpicesAndHerbs ({noun}) {
    const [appear, setAppear] = useState(noun.appear);
    const changeToTurkish = () => {
        setAppear('turkish')
        }

    const changeToPolish = () => {
        setAppear('polish')
        }

    const changeToImage = () => {
        setAppear('image')
        }

    return (
        <div key={noun.id} className="wordElement">
            <div className ="wordContainer">
                {appear === 'image' ? (
                    <img className="wordImage" src = {noun.url} alt ={noun.name}/>
                ) : (<p onClick ={changeToImage}>{noun[appear]}</p>)
            }
            </div>
            <div className="flagsContainer">
                    <img className="flagPic" 
                    src={turkishFlag} 
                    alt="Turkish flag" 
                    onClick={changeToTurkish}
                    />

                    <p>{noun.name}</p>

                    <img className="flagPic" 
                    src={polishFlag} 
                    alt="Polish flag" 
                    onClick={changeToPolish}
                    />
                </div>
        </div>
    )
}

const SpicesHerbs = () => {

    const spicesHerbsList = [
        {
        id: 0,
        name: 'salt',
        polish: 'sól',
        turkish: 'tuz',
        url: salt,
        appear: 'image',
        },
        {
        id: 1,
        name: 'pepper',
        polish: 'pieprz',
        turkish: 'biber',
        url: pepper,
        appear: 'image',
        },
        {
        id: 2,
        name: 'powdered pepper',
        polish: 'papryka w proszku',
        turkish: 'toz biber',
        url: paprika,
        appear: 'image',
        },
        {
        id: 3,
        name: 'sugar',
        polish: 'cukier',
        turkish: 'şeker',
        url: sugar,
        appear: 'image',
        },
        {
        id: 4,
        name: 'powdered sugar',
        polish: 'cukier puder',
        turkish: 'toz şeker',
        url: powderedSugar,
        appear: 'image',
        },
        {
        id: 5,
        name: 'chive',
        polish: 'szczypiorek',
        turkish: 'frenk soğanı',
        url: chive,
        appear: 'image',
        },
        {
        id: 6,
        name: 'dill',
        polish: 'koperek',
        turkish: 'dereotu',
        url: dill,
        appear: 'image',
        },
        {
        id: 7,
        name: 'parsley',
        polish: 'pietruszka',
        turkish: 'maydanoz',
        url: parsley,
        appear: 'image',
        },
        {
        id: 8,
        name: 'basil',
        polish: 'bazylia',
        turkish: 'fesleğen',
        url: basil,
        appear: 'image',
        },
        {
        id: 9,
        name: 'oregano',
        polish: 'oregano',
        turkish: 'kekik',
        url: oregano,
        appear: 'image',
        },
        {
        id: 10,
        name: 'mint',
        polish: 'mięta',
        turkish: 'nane',
        url: mint,
        appear: 'image',
        },
        {
        id: 11,
        name: 'bay leaf',
        polish: 'liść laurowy',
        turkish: 'defne yaprağı',
        url: bayLeaf,
        appear: 'image',
        },
        {
        id: 12,
        name: 'garlic',
        polish: 'czosnek',
        turkish: 'sarımsak',
        url: garlic,
        appear: 'image',
        },
        {
        id: 13,
        name: 'ginger',
        polish: 'imbir',
        turkish: 'zencefil',
        url: ginger,
        appear: 'image',
        },
        {
        id: 14,
        name: 'cinnamon',
        polish: 'cynamon',
        turkish: 'tarçın',
        url: cinnamon,
        appear: 'image',
        },
        {
        id: 15,
        name: 'vanilla',
        polish: 'wanilia',
        turkish: 'vanilya',
        url: vanilla,
        appear: 'image',
        },
        {
        id: 16,
        name: 'poppy seeds',
        polish: 'mak',
        turkish: 'haşhaş tohumu',
        url: poppySeeds,
        appear: 'image',
        },
        {
        id: 17,
        name: 'cloves',
        polish: 'goździki',
        turkish: 'karanfiller',
        url: cloves,
        appear: 'image',
        },
        {
        id: 18,
        name: 'sesame',
        polish: 'sezam',
        turkish: 'susam',
        url: sesame,
        appear: 'image',
        },
        {
        id: 19,
        name: 'aloe',
        polish: 'aloes',
        turkish: 'aloe',
        url: aloeVera,
        appear: 'image',
        },
        {
        id: 20,
        name: 'chamomile',
        polish: 'rumianek',
        turkish: 'papatya',
        url: chamomile,
        appear: 'image',
        },
    ]

    const animals = spicesHerbsList.map(noun => (
        <SpicesAndHerbs key ={noun.id} noun = {noun} />
        )
    )

    return ( 
        <div className="page">
            <h1>Spices and Herbs</h1>
            <div className="wordsContainer">
                {animals}
            </div>
        </div>
     );
}


 
export default SpicesHerbs;