function fetchGitHubUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; 
    const users = ["mojombo", "defunkt", "pjhyett", "wycats", "ezmobius", "ivey", "evanphx", "vanpelt", "wayneeseguin", "bryanry"];
    
    users.forEach(user => {
        const listItem = document.createElement("li");
        const userLink = document.createElement("a");
        userLink.href = `https://github.com/${user}`;
        userLink.textContent = user;
        userLink.target = "_blank";
        userLink.style.color = "blue"; 
        
        listItem.appendChild(userLink);
        userList.appendChild(listItem);
    });
}
