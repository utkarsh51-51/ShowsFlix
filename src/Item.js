import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';


function Item({ movie }) {
    return (

        <Card>
            <Slide left>
            <ImageBlock>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
                    alt={movie.Title}
                />
            </ImageBlock>
            {/* </Fade> */}
            
           

            <DescriptionBlock>
                <p>{movie.Type}</p>
                <h5>{movie.Title}</h5>
                <h5>{movie.Year}</h5>

            </DescriptionBlock>
            </Slide>
        </Card>


    )
}

export default Item

const Card = styled.div`
    display:flex;
    flex-direction:column;
    height:485px;
    width:305px;
    margin:3% 1% 1% 1%;
    box-shadow: #ffffff59 0px 5px 15px;
    border-radius:20px;
    img:hover{
        height:365px;
        width:302px;
    }
`
const ImageBlock = styled.div`
    img{
        height:355px;
        width:300px;
    }
`
const DescriptionBlock = styled.div`
    h5{
        font-size:20px;
        
    }
    h5:hover{
        color:red;
    }
    
`