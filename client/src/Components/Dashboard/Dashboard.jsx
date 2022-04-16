import React, {useEffect, useState} from 'react';
import { fetchAllIssues, removeIssueService } from '../../Services/httpRequests';
import Issue from '../Issue/Issue';


export const Dashboard = () => {

  const [issues, setIssues] = useState({});

  useEffect(() => {
    const loadIssues = async () => {
      setIssues(await fetchAllIssues())
    }
    loadIssues()
  }, []);

  const deleteIssue = async (id) => {
    await removeIssueService(id)
    setIssues(issues.filter((eachIssue) => {
    return eachIssue._id !== id
    }));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className='issues--container'>
      
      {issues.length > 0 ? 
        issues.map(
          eachIssue => <Issue key={eachIssue._id} delete={deleteIssue} {...eachIssue}/>
          )
      :
        <p>No issues to be displayed.</p>}
      </div>
      
      
    </div>
  );
};

export default Dashboard;
