const router = require('express').Router();

const queries = require('../db/queries');

router.get('/:project', async (req, res) => {
  // find all issues of a particular project
  // filter by query params if any
  try {
    const projectname = req.params.project.toLowerCase();
    const issues = await queries.getAllIssues(projectname, req.query);
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({error: error.message});    
  }
})

router.post('/:project', async (req, res) => {
  // make an issue inside a paricular project
  try {
    let projectname = req.params.project.toLowerCase();
    let issue = req.body;
    const newIssue = await queries.createIssue(projectname, issue);
    res.status(200).json(newIssue);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
})

router.put('/:project', async (req, res) => {

});

router.delete('/:project', async (req, res) => {

});

router.get('/:project/:issue_id', async (req, res) => {

})

module.exports = router;