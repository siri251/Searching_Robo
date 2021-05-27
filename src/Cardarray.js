import React from 'react';
import Card from './Card'

const Cardarray=({Robots})=>{

    // const cardcomponent=Robots.map((user,i)=>{
    //     return <Card key={i} id={Robots[i].id} name={Robots[i].name} email={Robots[i].email} /> 
    // })
    return(
      <div>

        
        {
            Robots.map((user,i)=>{
            return <Card key={i} id={Robots[i].id} name={Robots[i].name} email={Robots[i].email} /> 
        })
        
        }
        
      </div>

    );
}

export default Cardarray;
