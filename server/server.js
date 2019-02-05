const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const helmet = require('helmet');

const queries = require('./db/queries');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/issues', apiRouter);

app.use(express.static('dist'));

app.get('/projects', async (req, res) => {
  let projects = await queries.getAllProjects();
  res.status(200).json(projects);
});

app.post('/projects/new', async (req, res) => {
  try {
    let project = { projectname: req.body.projectname.toLowerCase() };
    if (!project.projectname) throw new Error('project must have a name'); 
    let newProject = await queries.createProject(project);
    res.status(200).json(newProject);
  } catch (error) {
    res.json({error: error.message });    
  }
});

module.exports = app;

app.listen(PORT, () => console.log('server started'))