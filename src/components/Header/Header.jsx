 import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center   border-b-2  max-w-7xl mx-auto p-4'>
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
