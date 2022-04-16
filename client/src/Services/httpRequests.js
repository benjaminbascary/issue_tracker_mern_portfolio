export const fetchAllIssues = async () => {
    try {
        const response = await fetch("http://localhost:3001/api/issues")
        const data = await response.json()
        return data
    } catch(e) {
        console.log("Error fetching data from db" + e);
    };
};

export const postIssue = async (issue) => {
    try {
        fetch("http://localhost:3001/api/postIssue", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(issue)
        });
    } catch(e) {
        console.log("Error posting data to db");
    };
};

export const removeIssueService = async (id) => {
    try {
        await fetch(`http://localhost:3001/api/delete/${id}`, {
            method: "DELETE",
        }).then(res => res.json()).then(res => console.log(res))
    } catch (e) {
        console.log("Cant delete issue" + e);
    };
};