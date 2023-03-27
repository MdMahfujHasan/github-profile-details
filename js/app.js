document.getElementById('btn-search').addEventListener('click', function () {
    const userNameStr = document.getElementById('username-input');
    const userNameValue = userNameStr.value;
    const handleSpaces = (userNameValue.split(' ')).join('');
    loadUserDetails(handleSpaces);
    userNameStr.value = '';
})

const loadUserDetails = async userName => {
    try {
        const url = `https://api.github.com/users/${userName}`;
        const res = await fetch(url);
        const data = await res.json();
        displayUserDetails(data);
    }
    catch (error) {
        // console.log(error);
    }
}

const getDateAndTime = (str) => {
    const string = `${str}`;
    const result1 = string.split('T');
    const result2 = result1[1].split('Z');
    return `${result2[0]}, ${result1[0]}`;
}

// login, name, avatar_url, blog, created_at, followers, followers_url, following, html_url, public_repos, updated_at

const displayUserDetails = details => {
    const userDetails = document.getElementById('user-details');
    userDetails.innerHTML = '';

    const createdAt = getDateAndTime(details.created_at);
    const updatedAt = getDateAndTime(details.updated_at);

    const div = document.createElement('div');
    div.innerHTML = `
        <div class="bg-violet-200 px-6 py-8 rounded-lg">
            <section class="grid grid-cols-2">
                <div>
                    <p title="name" class="text-2xl"><span class="font-bold">${details.name}</span></p>    
                    <p title="username" class="text-sm"><span class="font-medium">${details.login}</span></p>
                    <a class="text-blue-600 hover:underline" target="_blank" href="${details.html_url}">GitHub Profile</a>
                    <p><span class="font-medium">Bio: </span><span class="text-green-400 font-semibold hover:underline">${details.bio ? details.bio : `<span class="text-rose-500 hover:underline">No bio exist</span>`}</span></p>
                </div>
                <div>
                    <img class="border-2 border-dashed p-1 border-violet-400 img-fluid" width= "250px" src="${details.avatar_url}" alt="user's avatar">
                </div>
            </section>
            <section class="grid grid-cols-2">
                <div>
                    <p><span class="font-medium">Public Repositories: </span><span class="text-green-400 font-semibold">${details.public_repos}</span></p>
                    <p><span class="font-medium">Followers: </span><span class="text-green-400 font-semibold">${details.followers}</span></p>
                    <p><span class="font-medium">Following: </span><span class="text-green-400 font-semibold">${details.following}</span></p>
                </div>
                <div>
                    <a class="text-blue-600 hover:underline" target="_blank" href="${details.blog}">${details.login}'s Blog</a>
                    <p><span class="font-medium">Account created at: </span><span class="text-green-400 font-semibold hover:underline">${createdAt}</span></p>
                    <p><span class="font-medium">Updated at: </span><span class="text-green-400 font-semibold hover:underline">${updatedAt}</span></p>
                </div>
            </section>
        </div>
    `;
    userDetails.appendChild(div);
}