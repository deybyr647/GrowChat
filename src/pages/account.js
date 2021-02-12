import {useContext} from 'react';
import {useNavigate} from '@reach/router';

import {UserContext} from '../providers/userProvider';
import {auth} from '../firebase/firebase';
import * as ROUTES from '../constants/routes';

import {Container, Row, Col, Image, Navbar, Form, FormControl, ListGroup, Card, CardColumns, Dropdown} from 'react-bootstrap';

const Navigation = ({profileImage}) => {
    const navigate = useNavigate();

    const signOutHandler = () => {
        auth.signOut();
        navigate(ROUTES.LOGIN);
    }

    return(
        <Navbar bg='light' variant='light' className='d-flex justify-content-between'>
            <Form.Check
                type='switch'
                id='custom-switch'
                className='mx-2'
                onClick={() => navigate(ROUTES.MESSAGES)}
            />

            <Form className=''>
                <FormControl type='text' placeholder='Search' size='md'/>
            </Form>
            
            <Navbar.Brand className='mx-2' onClick={() => signOutHandler()}>{profileImage ? <Image src={profileImage} alt='pfp' width={60} rounded/> : "Account"}</Navbar.Brand>
        </Navbar>
    )
}

const TestPost = () => (
    <Card className='shadow'>
        <Card.Img variant="top" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" />
        <Card.Body>
        <Card.Title>Post</Card.Title>
        <Card.Text>
            Description
        </Card.Text>
        </Card.Body>
    </Card>
)

const TestCommunity = ({num}) => (
    <ListGroup.Item className='d-flex justify-content-around'>
        <Image src='https://pcdn.sharethis.com/wp-content/uploads/2019/08/FeatureImage-Reddit-2-2.jpg' className='w-25'/>
        <h4 className='text-center'>Community {num}</h4>
    </ListGroup.Item>
)

let testArr = [0,1,2,3,4,5,];

const ProfilePage = () => {
    const user = useContext(UserContext);
    const {photoURL, userName, email, fullName} = user;

    return(
        <>
            <Navigation profileImage={photoURL}/>
            <Container className='mt-4'>
                <Row className='d-flex flex-column justify-content-center align-items-center p-2'>
                    <Col className='justify-content-center d-flex bg-white' lg={12}>
                        <Image 
                            src='https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-pure-color-watercolor-graffiti-gradient-background-board-design-board-design-image_66713.jpg'
                            className='w-100'
                        />
                    </Col>

                    <Col lg={12} className='mt-1'>

                        <Row className='bg-white'>
                                
                            <Col lg={3} sm={5} md={4}>
                                <Image src={photoURL} roundedCircle alt='PFP' className='w-100 p-3'/>
                            </Col>

                            <Col className='mt-4'>
                                <h4>{fullName}</h4>
                                <h6>@{userName}</h6>
                                <p>Just some caption....</p>
                            </Col>
                                
                        </Row>
                        
                    </Col>
                </Row>

                <Row className='mt-2 p-1'>
                    <Col className='bg-white p-3 m-1'>
                        <h3 className='text-center mb-3'>Posts</h3>
                        <CardColumns className=''>
                            {testArr.map((el, ndx) => <TestPost key={ndx}/>)}
                        </CardColumns>
                    </Col>

                    <Col className='bg-white p-3 m-1' md={12} lg={6}>
                        <h3 className='text-center mb-3'>Communities</h3>
                        <ListGroup>
                            {testArr.map((el, ndx) => <TestCommunity num={ndx} key={ndx}/>)}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfilePage;