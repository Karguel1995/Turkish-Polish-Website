import mosque from '../../../images/Trips/CarTripToTurkey/mosque.jpg'
import mausoleum from '../../../images/Trips/CarTripToTurkey/mausoleum.jpg'
import cappadociaBalloons from '../../../images/Trips/CarTripToTurkey/cappadociaBalloons.jpg'
import cappadocia from '../../../images/Trips/CarTripToTurkey/cappadocia.jpg'
import '../../Scss/Trips.scss'

const CarTripToTurkey = () => {
  return ( 
    <article className="tripArticle">
      <header className="carTripToTurkey">
        <div className="headerBorder"></div>
      </header>

      <h1>Car trip to Turkey</h1>
      <p className="text">The best and the craziest adventure in our lives – that’s how I would describe trip to Turkey in one sentence. And it all began with the starting the engine. Bus engine? Airplane engine? No! My own car! 2061 kilometers one way from my city to Istanbul. Slovakia, Hungary, Serbia and Bulgaria along the way, but Filip spends 3 days driving to see his beloved one – Ceren. </p>

      <p className="text">Istanbul can really amaze a person who is in such a huge city for the first time in his life. A city surrounded by the sea and mosques rising up to the sky, including Hagia Sophia - the most important work of Byzantine architecture. A building that has been pleasing the eyes of residents and visitors for almost 1500 years. In front of it, another great mosque – Sultan Ahmed Mosque, and in the distance, the Galata Tower is watching us. </p>

      <div className="containerForPhotoFromTrip">
        <img className="photoFromTrip" src={mosque} alt="blue-mosque"/>
        <p>The Blue Mosque <i>(Sultan Ahmed Camii)</i></p>
      </div>

      <p className="text">Leaving Istanbul on the third day, we stopped in the Asian part to take a last look at the panorama of the whole of Istanbul from Çamlıca Hill. We also saw Maiden's Tower, ate kumpir and continued our journey. Due to the fact that we left quite late, we had to stop on the way before midnight and sleep in the car overnight. </p>

      <p className="text">In the morning we went to the next point of our adventure - the capital of Turkey, Ankara. Our first stop was the Polish Embassy. Being so far from home, I wanted to look at the Polish coat of arms for a moment. Then we drove to Ankara Castle to see whole city. Ceren asked me, if I want to see the mausoleum of Mustafa Kemal Atatürk, the leader of the Turkish War of Independence, the founder and first President of the Republic of Turkey. It's an amazing place with a huge Ceremonial Plaza and Hall of Honor. We also honored the memory of this great leader and continued our journey. </p>

      <div className="containerForPhotoFromTrip">
        <img className="photoFromTrip" src={mausoleum} alt="blue-mosque"/>
        <p>The mausoleum of Mustafa Kemal Atatürk <i>(Anıtkabir)</i></p>
      </div>

      <p className="text">The road was very long, all the way to Cappadocia, so we had to turn to another night stop. This time we had a problem with finding a suitable accommodation, because the interesting lake from google maps turned out to be a huge empty field. We drove from one place to another, and finally we found a small gas station. We were welcomed by two men, who proposed us a supper. We didn't come empty-handed either, because we bought Raki earlier, a traditional Turkish alcohol, so we spent this evening very well.</p>

      <div className="containerForPhotoFromTrip">
        <img className="photoFromTrip" src={cappadocia} alt="cappadocia"/>
        <p>Göreme Historical National Park <i>(Cappadocia)</i></p>
      </div>

      <p className="text">Cappadocia was not so far away, so the next day, after a few hours, we were already among volcanic rocks and amazing sandy terrain in a town called Göreme. It is impossible to describe how this land is breathtaking. The landforms are so unique that it’s hard to believe they really exist until you see them with your own eyes. We spent the whole day relaxing and admiring the views, to get up at 6am the next day and see the hot air balloons. Unfortunately, our luck showed that we had the pleasure to see a total of 6 hot air balloons. Despite everything, we were very happy to see this place. And with that smile on our face, we set off on our way back to Istanbul.</p>

      <div className="containerForPhotoFromTrip">
        <img className="photoFromTrip" src={cappadociaBalloons} alt="cappadocia"/>
        <p>Hot Air Balloons Flight over Cappadocia</p>
      </div>

      <p className="text">In one week, I saw so many great places, I got to know amazing Turkish cuisine and most importantly, I had a wonderful time with my beloved. Turkey is a beautiful country with a soul. People who come here, come back with lots of great memories. It's a place on earth with friendly people offering you tea and stories from their lives. If you have never been here before then think, maybe this is a good idea for your next vacation?</p>

    </article>
  );
}
 
export default CarTripToTurkey;