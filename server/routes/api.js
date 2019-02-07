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
  // update any field of an issue in a particular project, by providing update object in the body
  try {
    let updates = req.body;
    const keys = Object.keys(updates);
    if (keys.length === 0) throw new Error('Must provide one field to update');
    if (keys.includes('created_on') || keys.includes('id') || keys.includes('project_id')) throw new Error('Update request denied');
    let projectname = req.params.project.toLowerCase();
    let updatedIssue = await queries.updateIssue(projectname, updates);
    res.status(200).json(updatedIssue);
  } catch (error) {
    res.status(500).json({error: error.message});    
  }
});

router.delete('/:project', async (req, res) => {
  // delete an issue from the db
  try {
    let issueId = req.body.id
    const deletedIssue = await queries.deleteIssue(issueId);
    if (deletedIssue === 1) {
      res.status(200).json({success: `deleted Issue ${issueId}`})
    } else {
      res.status(404).json({failed: `could not delete ${issueId}`})
    }
  } catch (error) {
    res.status(500).json({error: error.message});    
  }
});

router.get('/:project/:issue_id', async (req, res) => {
  const issueId = req.params.issue_id;
  const issue = await queries.findIssueById(issueId);
  res.status(200).json(issue[0]);
})

module.exports = router;