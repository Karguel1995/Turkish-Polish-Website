import cat from '../../../../images/AnimalImages/cat.jpg'
import dog from '../../../../images/AnimalImages/dog.jpg'
import bird from '../../../../images/AnimalImages/bird.jpg'
import duck from '../../../../images/AnimalImages/duck.jpg'
import chicken from '../../../../images/AnimalImages/chicken.jpg'
import fish from '../../../../images/AnimalImages/fish.jpg'
import mouse from '../../../../images/AnimalImages/mouse.jpg'
import rabbit from '../../../../images/AnimalImages/rabbit.jpg'
import pig from '../../../../images/AnimalImages/pig.jpg'
import horse from '../../../../images/AnimalImages/horse.jpg'
import cow from '../../../../images/AnimalImages/cow.jpg'
import sheep from '../../../../images/AnimalImages/sheep.jpg'
import bear from '../../../../images/AnimalImages/bear.jpg'
import lion from '../../../../images/AnimalImages/lion.jpg'
import tiger from '../../../../images/AnimalImages/tiger.jpg'
import elephant from '../../../../images/AnimalImages/elephant.jpg'
import frog from '../../../../images/AnimalImages/frog.jpg'
import crab from '../../../../images/AnimalImages/crab.jpg'
import turtle from '../../../../images/AnimalImages/turtle.jpg'
import spider from '../../../../images/AnimalImages/spider.jpg'
import ladybug from '../../../../images/AnimalImages/ladybug.jpg'
import turkishFlag from '../../../../images/turkey.png'
import polishFlag from '../../../../images/poland.png'
import React, { useState } from 'react'

function Animal ({animal}) {
    const [appear, setAppear] = useState(animal.appear);
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
        <div key={animal.id} className="wordElement">
            <div className ="wordContainer">
                {appear === 'image' ? (
                    <img className="wordImage" src = {animal.url} alt ={animal.name}/>
                ) : (<p onClick ={changeToImage}>{animal[appear]}</p>)
            }
            </div>
            <div className="flagsContainer">
                    <img className="flagPic" 
                    src={turkishFlag} 
                    alt="Turkish flag" 
                    onClick={changeToTurkish}
                    />

                    <p>{animal.name}</p>

                    <img className="flagPic" 
                    src={polishFlag} 
                    alt="Polish flag" 
                    onClick={changeToPolish}
                    />
                </div>
        </div>
    )
}

const Animals = () => {

    const animalList = [
        {
        id: 1,
        name: 'cat',
        polish: 'kot',
        turkish: 'kedi',
        url: cat,
        appear: 'image',
        },
        {
        id: 2,
        name: 'dog',
        polish: 'pies',
        turkish: 'k??pek',
        url: dog,
        appear: 'image',
        },
        {
        id: 3,
        name: 'bird',
        polish: 'ptak',
        turkish: 'ku??',
        url: bird,
        appear: 'image',
        },
        {
        id: 4,
        name: 'duck',
        polish: 'kaczka',
        turkish: '??rdek',
        url: duck,
        appear: 'image',
        },
        {
        id: 5,
        name: 'chicken',
        polish: 'kura',
        turkish: 'tavuk',
        url: chicken,
        appear: 'image',
        },
        {
        id: 6,
        name: 'fish',
        polish: 'ryba',
        turkish: 'bal??k',
        url: fish,
        appear: 'image',
        },
        {
        id: 7,
        name: 'mouse',
        polish: 'mysz',
        turkish: 'fare',
        url: mouse,
        appear: 'image',
        },
        {
        id: 8,
        name: 'rabbit',
        polish: 'kr??lik',
        turkish: 'tav??an',
        url: rabbit,
        appear: 'image',
        },
        {
        id: 9,
        name: 'pig',
        polish: '??winia',
        turkish: 'domuz',
        url: pig,
        appear: 'image',
        },
        {
        id: 10,
        name: 'horse',
        polish: 'ko??',
        turkish: 'at',
        url: horse,
        appear: 'image',
        },
        {
        id: 11,
        name: 'cow',
        polish: 'krowa',
        turkish: '??nek',
        url: cow,
        appear: 'image',
        },
        {
        id: 12,
        name: 'sheep',
        polish: 'owca',
        turkish: 'koyun',
        url: sheep,
        appear: 'image',
        },
        {
        id: 13,
        name: 'bear',
        polish: 'nied??wied??',
        turkish: 'ay??',
        url: bear,
        appear: 'image',
        },
        {
        id: 14,
        name: 'lion',
        polish: 'lew',
        turkish: 'aslan',
        url: lion,
        appear: 'image',
        },
        {
        id: 15,
        name: 'tiger',
        polish: 'tygrys',
        turkish: 'kaplan',
        url: tiger,
        appear: 'image',
        },
        {
        id: 16,
        name: 'elephant',
        polish: 's??o??',
        turkish: 'fil',
        url: elephant,
        appear: 'image',
        },
        {
        id: 17,
        name: 'frog',
        polish: '??aba',
        turkish: 'kurba??a',
        url: frog,
        appear: 'image',
        },
        {
        id: 18,
        name: 'crab',
        polish: 'krab',
        turkish: 'yenge??',
        url: crab,
        appear: 'image',
        },
        {
        id: 19,
        name: 'turtle',
        polish: '??????w',
        turkish: 'kaplumba??a',
        url: turtle,
        appear: 'image',
        },
        {
        id: 20,
        name: 'spider',
        polish: 'paj??k',
        turkish: '??r??mcek',
        url: spider,
        appear: 'image',
        },
        {
        id: 21,
        name: 'ladybug',
        polish: 'biedronka',
        turkish: 'u??ur b??ce??i',
        url: ladybug,
        appear: 'image',
        },
    ]

    const animals = animalList.map(animal => (
        <Animal key ={animal.id} animal = {animal} />
        )
    )

    return ( 
        <div className="page">
            <h1>Animals</h1>
            <div className="wordsContainer">
                {animals}
            </div>
        </div>
     );
}


 
export default Animals;