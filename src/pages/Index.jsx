
import MessageForm from "../components/MessageForm";
import MessagesList from "../components/MessagesList";

function Index() {

  return (
    <div>
      <MessagesList />
      <MessageForm
        onSubmit={() => console.log('Submit')}
      />
    </div>
  )
};

export default Index;