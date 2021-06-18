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

const Animals = () => {

    const animalList = [
        {
        id: 1,
        name: 'cat',
        polish: 'kot',
        turkish: 'kedi',
        url: cat,
        },
        {
        id: 2,
        name: 'dog',
        polish: 'pies',
        turkish: 'köpek',
        url: dog,
        },
        {
        id: 3,
        name: 'bird',
        polish: 'ptak',
        turkish: 'kuş',
        url: bird,
        },
        {
        id: 4,
        name: 'duck',
        polish: 'kaczka',
        turkish: 'ördek',
        url: duck,
        },
        {
        id: 5,
        name: 'chicken',
        polish: 'kura',
        turkish: 'tavuk',
        url: chicken,
        },
        {
        id: 6,
        name: 'fish',
        polish: 'ryba',
        turkish: 'balık',
        url: fish,
        },
        {
        id: 7,
        name: 'mouse',
        polish: 'mysz',
        turkish: 'fare',
        url: mouse,
        },
        {
        id: 8,
        name: 'rabbit',
        polish: 'królik',
        turkish: 'tavşan',
        url: rabbit,
        },
        {
        id: 9,
        name: 'pig',
        polish: 'świnia',
        turkish: 'domuz',
        url: pig,
        },
        {
        id: 10,
        name: 'horse',
        polish: 'koń',
        turkish: 'at',
        url: horse,
        },
        {
        id: 11,
        name: 'cow',
        polish: 'krowa',
        turkish: 'İnek',
        url: cow,
        },
        {
        id: 12,
        name: 'sheep',
        polish: 'owca',
        turkish: 'koyun',
        url: sheep,
        },
        {
        id: 13,
        name: 'bear',
        polish: 'niedźwiedź',
        turkish: 'ayı',
        url: bear,
        },
        {
        id: 14,
        name: 'lion',
        polish: 'lew',
        turkish: 'aslan',
        url: lion,
        },
        {
        id: 15,
        name: 'tiger',
        polish: 'tygrys',
        turkish: 'kaplan',
        url: tiger,
        },
        {
        id: 16,
        name: 'elephant',
        polish: 'słoń',
        turkish: 'fil',
        url: elephant,
        },
        {
        id: 17,
        name: 'frog',
        polish: 'żaba',
        turkish: 'kurbağa',
        url: frog,
        },
        {
        id: 18,
        name: 'crab',
        polish: 'krab',
        turkish: 'yengeç',
        url: crab,
        },
        {
        id: 19,
        name: 'turtle',
        polish: 'żółw',
        turkish: 'kaplumbağa',
        url: turtle,
        },
        {
        id: 20,
        name: 'spider',
        polish: 'pająk',
        turkish: 'Örümcek',
        url: spider,
        },
        {
        id: 21,
        name: 'ladybug',
        polish: 'biedronka',
        turkish: 'uğur böceği',
        url: ladybug,
        },
    ]

    const animals = animalList.map(animal => (

            <div className="wordElement">
                <img className="wordImage" src = {animal.url} alt ={animal.name}/>
                <div className="flagsContainer">
                    <img className="flagPic" src={turkishFlag} alt="Turkish flag" />
                    <p>{animal.name}</p>
                    <img className="flagPic" src={polishFlag} alt="Polish flag" />
                </div>
            </div>
    ))

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