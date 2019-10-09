import React from 'react';
import './style/Work.css';
import art from './assets/artstagram.png';
import gitjobs from './assets/gitjobs.png';
import tre from './assets/tretre.png';

class Work extends React.Component {

  startingState = {
    show: false,
    name: '',
    description: '',
    demo: '',
    github: [],
    img: ''
  }

  state = this.startingState

  goBack = () => {
    this.setState(this.startingState)
  }

  handleClick = (project) => {
    if (project === 'tree'){
      this.setState({
        name: 'TreeTrends',
        description: 'Users can locate trees on the NYC streets near them for stewardship opportunities as well as browse data from the 2015 NYC Street Tree Census.',
        demo: 'https://www.youtube.com/watch?v=rEuIcwjCHzc&feature=youtu.be',
        github: ['https://github.com/lgm527/treetrends-client', 'https://github.com/lgm527/treetrends-API'],
        img: tre
      })
    } else if (project === 'git') {
      this.setState({
        name: 'GitJobs or Die Pryin',
        description: 'Users can locate jobs postings on Github and save them to their profile with links to apply.',
        demo: 'https://www.youtube.com/watch?v=9lX1S3DQ_bc&feature=youtu.be',
        github: ['https://github.com/lgm527/GitJobs-client', 'https://github.com/lgm527/GitJobs_API'],
        img: gitjobs
      })
    } else if (project === 'art') {
      this.setState({
        name: 'Artstagram',
        description: 'User can view artwork by Van Gogh, as well as like, and leave comments.',
        demo: 'https://www.youtube.com/watch?v=d22s48KLxHo&feature=youtu.be',
        github: ['https://github.com/lgm527/artstagram'],
        img: art
      })
    }
    this.setState({show: true})
  }

  showGitHubs = () => {
    return this.state.github.map((link) => {return <p key={link.index}><a href={link}>Github</a></p>})
  }

//return <a href={link}>Github</a>

  render(){
    return (
      <div className='container'>

      { this.state.show ?
        <div className='show'>
          <span id='x' onClick={this.goBack}>X</span>
          <img id='showImage' src={this.state.img} alt='project' />
          <p>{this.state.name}</p>
          <p>{this.state.description}</p>
          <p><a href={this.state.demo}>Demo</a></p>
          {this.showGitHubs()}
        </div>
        :
        <div className="projects">
          <div>
            <img src={tre} alt='tree' onClick={() => {this.handleClick('tree')}}/>
          </div>

          <div>
            <img src={gitjobs} alt='git' onClick={() => {this.handleClick('git')}}/>
          </div>

          <div>
            <img src={art} alt='art' onClick={() => {this.handleClick('art')}}/>
          </div>
        </div>
    }

      </div>
    )
  }

}

export default Work;
