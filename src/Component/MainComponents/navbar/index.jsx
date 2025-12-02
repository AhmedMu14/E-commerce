
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.length;


  useEffect(() => {
    axios.get("http://localhost:5000/me", { withCredentials: true })
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  const handleCartClick = () => {
    if (!user) {
      toast.error("Please sign in first.");
      navigate("/signin");
      return;
    }
    setIsCartOpen(true);
  };

  const handleLogout = () => {
    axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
    setUser(null);
    navigate("/signin");
  };

function index() {
  return (
    <div>



      buffer matlab pdf images wagar a mongodb nhi bna aha ya chaezay store kay lia 
      AWS buket may image store ho te hai respose may url dey te hai  or wo ape database may save kar saktay ho 
      ek ate ha cloudinary ya be response may url dey  ta ha 
      </div>
  )
}

export default index