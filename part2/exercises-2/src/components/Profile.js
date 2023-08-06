import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

const listItem = oceans.map(ocean =>
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
     <h1>{ocean.name}</h1>
      <img src={ocean.image} alt={ocean.name} className="img"/>
      <h3>Fun Facts:</h3>
         <ul>{ocean.fact1}</ul>
         <ul>{ocean.fact2}</ul>
         <ul>{ocean.fact3}</ul>
      <Button />
   </div>
   );

function Profile()
{
   return(
      <>
         <ul>
            {listItem}
         </ul>
         
      </>  
   );
}

export default Profile;