import { Outlet } from 'react-router-dom';

import Directory from "../../components/directory/directory.component";

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://media.istockphoto.com/id/614014116/photo/heavily-tattooed-bearded-athletic-alternative-man-stretching-before-a-workout.jpg?s=612x612&w=0&k=20&c=AodHkzgP7oGrVR2wlAzuXexBS0ZQKLgtPQqjbOHOlRM="
    }
  ]

  return (
    <div>
        <Outlet/>
      <Directory categories={categories}/>
    </div>
  );
}

export default Home;
