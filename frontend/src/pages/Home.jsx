import GroupList from '../components/GroupList'
import AddGroupForm from '../components/AddGroupForm'
import AddItemForm from '../components/AddItemForm';

export default function UserProfile() {

  return (
    <div>
      <GroupList />
      <AddItemForm />
      <AddGroupForm />
    </div>
  );
}
