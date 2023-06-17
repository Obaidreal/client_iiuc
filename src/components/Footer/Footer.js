import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center' color='white' bgColor='black'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon className='text-info' fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon className='text-info' fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon className='text-danger' fab icon='google' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab className='text-info' icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign Up For Our News_Letter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start='12'>
                                <MDBInput contrast type='email' label='Email address' className='mb-4' />
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='light' type='submit' className='mb-4'>
                                    Subscribe
                    </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                    alumni.iiuc@gmail.com<br/>
                    Contact: +8801745940121 | +8802334461900-7<br/>
                    Mobile: +8801851120791 | +8801773225500 | +8801773225511<br/>
              </p>
                </section>


            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright ||  
            <a className='text-white' href='https://www.iiuc.ac.bd/'>
             .iiuc.ac.bd
            </a>
            </div>
        </MDBFooter>
    );
};

export default Footer;



