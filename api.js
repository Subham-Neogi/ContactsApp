
const processContact = contact => ({
    name: `${contact.name.first} ${contact.name.last}`,
    phone:  contact.phone,
})

export const fetchUsers = async (num) => {
    const response= await fetch(`https://randomuser.me/api/?results=${num}&nat=GB`)
    const {results} = await response.json()
    return results.map(processContact)
}