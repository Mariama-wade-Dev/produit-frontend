const AuthHeader = ({ logo, title }) => (
  <div className="flex items-center gap-2 mb-4 text-white">
    <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
    <h1 className="text-lg font-bold uppercase italic">{title}</h1>
  </div>
);

export default AuthHeader;