import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div>
         
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                    <h2>Why you choose us</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!
</p>
                    </div>
                </div>
                <div className="row mt-4 mb-5">
                    <div className="col-md-4">
                        <div class="card text-left aboutus-card" style={{border:'none'}}>
                          <img className="card-img-top" src="https://i.ibb.co/S5dL1sc/adult-blur-blurred-background-687824.png" alt=""/>
                          <div className="card-body d-flex">
                              <div className="me-3">
                                  <img src="https://i.ibb.co/02jsZfH/Group-204.png" alt=""/>
                              </div>
                              <div>
                            <h5 className="card-title">Quick Delivery</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-left aboutus-card" style={{border:'none'}}>
                          <img className="card-img-top" src="https://i.ibb.co/0rQJCW3/chef-cook-food-33614.png" alt=""/>
                          <div className="card-body d-flex">
                              <div className="me-3">
                                  <img src="https://i.ibb.co/3CZ7JGz/Group-1133.png" alt=""/>
                              </div>
                              <div>
                            <h5 className="card-title">A Good Auto Responder</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card text-left aboutus-card" style={{border:'none'}}>
                          <img class="card-img-top" src="https://i.ibb.co/JqpzDvK/architecture-building-city-2047397.png" alt=""/>
                          <div class="card-body d-flex">
                              <div className="me-3">
                                  <img src="https://i.ibb.co/Hr0sbS3/Group-245.png" alt=""/>
                              </div>
                              <div>
                            <h5 className="card-title">Home Delivery</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;