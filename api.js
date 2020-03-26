
const processContact = contact => ({
    name: `${contact.name.first} ${contact.name.last}`,
    phone:  contact.phone,
})

export const fetchUsers = async (num) => {
    const response= await fetch(`https://randomuser.me/api/?results=${num}&nat=GB`)
    const {results} = await response.json()
    return results.map(processContact)
}

export const login =  async (username,password)=> {
    const response = await fetch(`http://192.168.43.241:8000`,
            {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({
                    username, password
                })
            })
            //console.log(response)
            if (response.ok) {
                return true
            }

            const errMessage = await response.text()
            throw new Error(errMessage)
}