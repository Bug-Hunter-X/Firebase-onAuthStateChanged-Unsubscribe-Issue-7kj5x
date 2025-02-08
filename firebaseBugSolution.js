import { onAuthStateChanged, auth } from './firebase'; // Assuming you have firebase initialized elsewhere

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, []);

  // ... rest of the component
}