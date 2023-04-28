import './UserExistingSelect.css'

const UserExistingSelect = ({users, handleUserSelect, activeUser}) => {

    const renderUserOptions = users.map(user => {
        return <option key = {user._id} value={user._id}>{user.name}</option>
    })

    const handleUserSelected = (e) => {
        console.log(`handleUserSelected triggered with ${e.target.value}`)

        handleUserSelect(e.target.value)
        
    }

    return (
        <div className="UserExistingSelect">
            <p>UserExistingSelect</p>
            <p>I agree there are {users.length} users</p>
            <p>The active user is {activeUser.name}</p>
            <label htmlFor="user-selections">Select a user</label>
            <select 
                name="user-selections" 
                id = "user-selections" 
                onChange = {handleUserSelected}
                value = {activeUser._id}
            >
                <option value="">None</option>
                {renderUserOptions}
            </select>
        </div>
      );
}
 
export default UserExistingSelect;