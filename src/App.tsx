import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonsList } from './components/PersonsList';
import { Status } from './components/Status';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input'
import { Text } from './components/polymorphic/Text';
import { RandomNumber } from './components/restriction/RandomNumber';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Toast } from './components/templateLiterals/Toast';

function App() {
  const personName = {
    first: "Nodirbek",
    last: "Iskandarov"
  }

  const personsList = [
    {
      first: "Nodirbek",
      last: "Iskandarov",
      number: 1
    },
    {
      first: "Nodirbek",
      last: "Iskandarov",
      number: 2
    },
    {
      first: "Nodirbek",
      last: "Iskandarov",
      number: 3
    }
  ]
  return (
    <div className="App">
      <Greet name="Nodirbek" messageCount={22} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonsList persons={personsList} />
      <Status status='loading'/>
      <Heading>Heading</Heading>
      <Oscar>
        <Heading>
          Oscar
        </Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log("clciked", event, id)
      }}/>
      <Input value='' handleChange={(event) => {
        console.log(event)
      }}/>
      <Container styles={{border: '1px solid red', padding: '1rem'}}/>
      <LoggedIn/>
      <User/>
      <hr />
      <hr />
      <Private isLoggedin={true} component={Profile}/>
      <hr />
      <hr />
      <hr />
      {/* <List items={['birinchi', 'ikkinchi', 'uchinchi']} onClick={(item) => console.log(item)}/> */}
      <hr />
      <List items={[
        {
          id: 1,
          first: "Nodirbek1",
          last: "Iskandarov"
        },
        {
          id: 2,
          first: "Nodirbek2",
          last: "Iskandarov"
        },
        {
          id: 3,
          first: "Nodirbek3",
          last: "Iskandarov"
        }
      ]} onClick={(item) => console.log(item)}/>
      <hr />
      <RandomNumber value={10} isPositive />
      <hr />
      <hr />
      <Toast position='center'/>
      <hr />
      <CustomButton variant='primary' onClick={() => console.log("clciked")}>
        Primary Button
        </CustomButton>
      <hr />
      <CustomInput />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <br />
      <Text as='h1' size='lg'>heading</Text>
      <Text as='p' size='md'>paragraph</Text>
      <Text as='label' size='sm' color='secondary'>label</Text>
    </div>
  );
}

export default App;
