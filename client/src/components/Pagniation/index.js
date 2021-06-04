import React from 'react'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Pagination from 'react-bootstrap/Pagination'
import '../../App.css'



 const PaginationList = ({postsPerPage, totalPosts, paginate }) => {
  
const pageNumbers = [];

for(let i = 1; i <= Math.ceil(totalPosts/ postsPerPage); i++){
    pageNumbers.push(i)
}

return (
    <div>
        <Container className='pagination' fluid='md'>
            <p>Pages</p>
            <Row>
                <ul >
                {pageNumbers.map(number => (
                    
                    <li key={number} className='page-item'>
                        <a onClick={()=> paginate(number)}  className='page-link'>
                            {number}
                        </a>
                    </li>
                   
                ))}
                </ul>
            </Row>            
        </Container>    
        
      
    </div>
)

}
export default PaginationList
