import React, { Component } from 'react';
 
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: <div className='landingPageContainer'>
                  
                  <img src='./adamProfile.png' className='profilePic'></img>
                  
                  <h1>Adam Ishay</h1>
                  
                  <h2>Protector of Plato</h2>
                  
                  <div className='socialMediaIcons'>
                    <img src='./linkedInIcon.png'></img>
                    <img src='./twitterLogo.png'></img>
                    <img src='./instagramLogo.png'></img>
                    <img src='./emailLogo.png'></img>
              
                  </div>
                  
                  <section class="footer">
                  © 2022 Jackson Spindle · Powered by <a href="https://reactjs.org/">React</a>.
                  </section>

                </div>
    }
  }


  landingPage = () => {
    this.setState({ 
        message: <div className='landingPageContainer'>
                  <img src='./adamProfile.png' className='profilePic'></img>
                  <h1>Adam Ishay</h1>
                  <h2>Protector of Plato</h2>
                  <div className='socialMediaIcons'>
                    <img src='./linkedInIcon.png'></img>
                    <img src='./twitterLogo.png'></img>
                    <img src='./instagramLogo.png'></img>
                    <img src='./emailLogo.png'></img>
              
                  </div>
                  <section class="footer">
                  © 2022 Jackson Spindle · Powered by <a href="https://reactjs.org/">React</a>.
                  </section>
                </div>});
  }

 
  aboutPage = () => {
      this.setState({ 
        message: <div className='aboutPageContainer'>
                     
                      <h1>About</h1>
                      <p>[32] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                      <img src='./adamProfile.png' className='profilePic'></img>
                      <div className='socialMediaIcons'>
                        <img src='./linkedInIcon.png'></img>
                        <img src='./twitterLogo.png'></img>
                        <img src='./instagramLogo.png'></img>
                        <img src='./emailLogo.png'></img>
                      </div>
                  </div>});
  }

  render() {
    return (
      
      <div>
      <div className='headerContainer'>
      <h1 onClick={this.landingPage}>Adam Ishay</h1>
        <nav className='NavContainer'>
          <ul className='NavItemsContainer'>
            <li onClick={this.aboutPage}>About</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>CV</li>
          </ul>
        </nav>
      </div>
        <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.message }
        </div>

      </div>

    );
  }
}
 
export default App;