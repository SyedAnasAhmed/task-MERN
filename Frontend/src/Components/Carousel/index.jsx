import { Carousel } from "@material-tailwind/react";
import styles from './styles.module.css'

export function HeroCarousel() {
  return (
    <Carousel
      className={ `${styles.carousel}`}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)} 
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://f.nooncdn.com/mpcms/EN0001/assets/4d2b8a6a-b746-4d61-9561-5661cc46621e.png?format=avif"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://f.nooncdn.com/mpcms/EN0001/assets/afb626c8-b7a0-4c96-a924-e0aa7247aa3a.png?format=avif"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://f.nooncdn.com/mpcms/EN0001/assets/f762f8d9-2835-4ced-ad0c-b0605995d49d.gif?format=avif"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://f.nooncdn.com/mpcms/EN0001/assets/2fe1abc5-3e4a-407b-9000-44bedc595178.png?format=avif"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://f.nooncdn.com/mpcms/EN0001/assets/2f8d7599-5851-47dc-82ea-63512e60fe23.gif?format=avif"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://f.nooncdn.com/mpcms/EN0001/assets/c73a42b7-41af-4c17-8839-8fffef485b77.gif?format=avif"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
