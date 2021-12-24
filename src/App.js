import React from "react";
//import ReactDOM from 'react-dom';
import './App.css';

import {
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import {makeStyles} from '@material-ui/core'
//import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import profilepic from './dabhoang.jpg';
import gradday from './grad.jpg';
//import Icon from '@material-ui/core/Icon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentIcon from '@material-ui/icons/Assignment';
import resume from './DanHoang_Resume.pdf';
import {useEffect} from "react";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.


const tablabel = createTheme({
  typography: {
    fontFamily: 'Arial',
    button:{
      textTransform: 'none',
      fontSize: 16,
    }
  },
});



export default function App() {
  useEffect(() => {
     document.title = "Dan Hoang";  
   }, []);
  //const classes = useStyles()
  //componentDidMount() {
    //document.title = "Dan Hoang"; 
  //}
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>

        <AppBar position="static">
          
          <ThemeProvider theme={tablabel}>
          <Toolbar>

            

            <Grid justify={"center"} alignItems={"center"} container>
            <Tabs textColor="white" centered>
              <Tab label="Home" to="/" component={Link}/>
              <Tab label="About" to="/about" component={Link}/>
              <Tab label="Experience" to="/experience" component={Link}/>
              <Tab label="Projects" to="/projects" component={Link}/>
            </Tabs>
            </Grid>

            

          </Toolbar>
          </ThemeProvider>
        </AppBar>
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  /*const openResume = () => {
    const link = document.createElement("a");
    link.download = `DanHoang_Resume.pdf`;
    link.href = "DanHoang_Resume.pdf";
    link.click();
  };*/

  /*const emaillabel = createTheme({
    typography: {
      fontFamily: 'Arial',
        button:{
        textTransform: 'none',
        fontSize: 16,
      }
    },
  });*/

  
  return (
        //<title>Dan Hoang</title>
        <div class="center">
          <h1>Dan Hoang</h1>
          <img src={profilepic} alt="Dan Hoang profile pic" width="400" height="400" class = "profpic"></img>
          <h2>Aspiring Software Engineer</h2>
          <h2>Computer Science M.S. student at University of California, Davis</h2>
          <h2>Computer Science B.S. graduate from University of California, Santa Cruz</h2>
          
          <Button variant="contained" href="https://www.linkedin.com/in/dabhoang/" color="primary" startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
          <Button variant="contained" href={resume} color="primary" startIcon={<AssignmentIcon />}>
            Resume
          </Button>
          <Button variant="contained" href="https://github.com/dabhoang" color="primary" startIcon={<GitHubIcon />}>
            GitHub
          </Button>
          
          <br/>
          <h2>Contact:<br/>danhoang@ucdavis.edu</h2>





        </div>
  );
}




function About() {
  return (
    <div class = "margined">
      <h1 class="center">About</h1>
        <p>Hi! I'm Dan Hoang and I'm currently pursuing a Master of Science in Computer Science at University of California, Davis with an expected graduation in June 2022. 
        I graduated with a Bachelor of Science in Computer Science from University of California, Santa Cruz in June 2020 with Honors in the Major. 
        My goal upon graduation from UC Davis is to become a software engineer.


        </p>
      <img src={gradday} alt="Dan Hoang grad" class="graddaypic"></img>
    </div>
  );
}





function Experience() {
  return (
    <div class = "margined">
      <h1 class="center">Experience</h1>
        <h2>GaoTek Inc.</h2>
          <h3>Software Development Intern</h3>
          <h3>August 2021 - November 2021</h3>
            <ul>
              <li>Developed a Python script to extract necessary client data from a CSV file containing 200,000+ clients</li>
              <li>Provided the senior engineers with feedback regarding documentation and unit testing of a company software product</li>
              <li>Wrote Python scripts to improve search engine optimization (SEO) of the company’s website and content</li>
              <li>Performed research on standards for Group 3 facsimile communication over IP networks</li>
              <li>Collaborated with other interns to design communications protocols according to those standards</li>
            </ul>
        <br />
        <br />

        <h2>Western Digital Corporation</h2>
          <h3>Systems Design Engineering Intern</h3>
          <h3>June 2018 - September 2018</h3>
            <ul>
              <li>Developed ULINK Drive Master’s Power States Stress Test scripts for WDC NVMe devices using an in house C library</li>
              <li>Ensured that the drives produced by the company were robust and complied with NVMe specifications</li>
            </ul>
        <br />
        <br />

        <h2>UC Davis CS Department</h2>
          <h3>Teaching Assistant</h3>
          <h3>September 2021 - present</h3>
            <ul>
              <li>Helped students with debugging programming assignments in C, C++, RISC-V assembly, and x86 assembly</li>
            </ul>
        <br />
        <br />

        <h2>UC Santa Cruz CSE Department</h2>
          <h3>Grader / Reader</h3>
          <h3>March 2020 - June 2020</h3>
            <ul>
              <li>Evaluated 200+ students’ homework assignments per week for the CSE 103 Computational Models course</li>
              <li>Addressed rubrics and common mistakes during weekly meetings with the instructor and other graders</li>
            </ul>
        <br />
    </div>
  );
}





function Projects() {
  return (
    <div class = "margined">
      <h1 class="center">Projects</h1>

        <h2>Personal Website</h2>
          <h3>December 2021</h3>
          <ul>
            <li>Created a personal website to display my professional background using React.js and Material UI</li>
            <li>Utilized Netlify to successfully deploy my website - https://dabhoang.netlify.app/</li>
          </ul>
          <br />

        <h2>resilientDB</h2>
          <h3>December 2020</h3>
          <ul>
              <li>A high throughput yielding permissioned blockchain fabric/distributed database system written in C++</li>
              <li>Collaborated on a team of 5 to implement the Raft consensus algorithm</li>
            </ul>
            <br />

        <h2>RosterSearch</h2>
          <h3>October 2020</h3>
          <ul>
            <li>Implemented a Python script that filters students on a roster, which is a CSV file, by matching patterns</li>
            <li>Performed unit testing on the functions involved in the script using Python’s unittest framework</li>
          </ul>
          <br />

        <h2>Collect</h2>
          <h3>April 2019</h3>
          <ul>
            <li>Created a command line based game in Java where the user travels through multiple cities to collect points</li>
            <li>Implemented breadth first search to determine connectivity of cities and shortest distance to items</li>
          </ul>
    </div>
  );
}

