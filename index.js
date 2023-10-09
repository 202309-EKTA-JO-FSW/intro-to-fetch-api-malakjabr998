// Please read the README.md to understand what to do. Happy Coding !
async function fetchUserData(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const userData = await response.json()
        const modifiedUser = userData.map(user=>({
            name : user.name,
            username: user.username,
            email : user.email,
            address : user.address.street,
            phone: user.phone,
            website: user.website,
            company: user.company.name,
        }))
        const filtered = modifiedUser.filter(user=>user.email.endsWith('.biz'))
        console.log('Filtered Users (Email ends with .biz):', filtered)
        const sorted = modifiedUser.slice().sort((a, b) => a.name.localeCompare(b.name))
        console.log('Sorted Users (Alphabetically by Name):', sorted)
        return { filtered, sorted }

        
    } catch (error){
        console.error('Error fetching user data:', error.message)
    }

    
}
fetchUserData()