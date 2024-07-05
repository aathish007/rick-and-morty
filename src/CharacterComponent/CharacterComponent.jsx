import React from 'react'

const CharacterComponent = ({character}) => {
  return (
    <div className='chara_container'>
                
                    
                        <div className='chara_image'>
                            <img src={character.image} alt="img" />
                        </div>
                        
                        <div className='chara_descrip'>
                        <h1 className='name'>{character.name}</h1>
                            <p>{character.status}-{character.species}</p>
                            <p className='last_seen'>
                                Last Seen 0n
                            </p>
                            
                            {/* <p>{character.origin.name}</p>
                            <p>{character.gender}</p> */}
                            <p className='location_name'>{character.location.name}</p>
                            
                        </div>
                   </div>
                    
  )
}

export default CharacterComponent